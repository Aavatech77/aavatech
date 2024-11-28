"use client";
import React, { useState } from "react";
import FloatingLabelInput from "../ui/floating-label-input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import ErrorMessage from "../ErrorMessage";
import { requestQuote } from "@/actions/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteRequestValidationSchema } from "@/constants/validation-schemas/validation";
import { useToast } from "@/hooks/use-toast";

type FormInputs = {
  name: string;
  email: string;
  contactNo: string;
  description: string;
  budget: string;
  timeline: string;
};

const RequestQuoteModal = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({
    mode: "onChange",
    resolver: zodResolver(quoteRequestValidationSchema),
  });

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await requestQuote(formData);
    if (response.success) {
      setIsDialogOpen(false);
      reset();
      toast({
        title: "Your request has been submitted successfully",
      });
    } else
      toast({
        variant: "destructive",
        title: "Failed to submit your request",
        description: `Request failed: ${response.message}`,
      });
  };

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={() => setIsDialogOpen(!isDialogOpen)}
    >
      <DialogTrigger asChild>
        <Button variant={"secondary"} size="lg">
          Request a Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[500px]">
        <DialogHeader className="">
          <DialogTitle className="mb-6">Request a Quote</DialogTitle>
          <DialogDescription className="hidden">
            Request quote for a project
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <FloatingLabelInput label="Name">
              <input type="text" {...register("name")} required />
            </FloatingLabelInput>
            <ErrorMessage msg={errors.name?.message} />
          </div>
          <div className="space-y-1">
            <FloatingLabelInput label="Email">
              <input type="email" {...register("email")} required />
            </FloatingLabelInput>
            <ErrorMessage msg={errors.email?.message} />
          </div>
          <div className="space-y-1">
            <FloatingLabelInput label="Contact No.">
              <input type="tel" {...register("contactNo")} required />
            </FloatingLabelInput>
            <ErrorMessage msg={errors.contactNo?.message} />
          </div>
          <div className="space-y-1">
            <FloatingLabelInput label="Timeline (In Months)">
              <input type="tel" {...register("timeline")} required />
            </FloatingLabelInput>
            <ErrorMessage msg={errors.timeline?.message} />
          </div>
          <div className="space-y-1">
            <FloatingLabelInput label="Budget (In NRS)">
              <input type="tel" {...register("budget")} required />
            </FloatingLabelInput>
            <ErrorMessage msg={errors.budget?.message} />
          </div>
          <div className="space-y-1">
            <FloatingLabelInput label="Description">
              <textarea {...register("description")} required />
            </FloatingLabelInput>
            <ErrorMessage msg={errors.description?.message} />
          </div>
          <div className="flex gap-4 justify-end">
            <Button
              variant="ghost"
              type="reset"
              onClick={(e) => {
                e.preventDefault();
                reset();
              }}
            >
              Clear
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestQuoteModal;
