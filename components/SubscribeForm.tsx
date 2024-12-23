"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { subscribe } from "@/actions/actions";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await subscribe(email);
      if (result.success) {
        setEmail("");
        toast({
          title: "Confirm your email",
          description: `We have sent you confirmation email at ${email}`,
        });
      } else
        toast({
          title: "Subscription Failed",
          description: result.errors?.message || "Unable to subscribe",
          variant: "destructive",
        });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        placeholder="Enter your Email"
        className="bg-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" className="rounded-full" disabled={isSubmitting}>
        {isSubmitting ? "Subscribing" : "Subscribe"}
      </Button>
    </form>
  );
};

export default SubscribeForm;
