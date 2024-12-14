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
import DateInput from "../ui/date-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CONSULTATION_CATEGORIES } from "@/constants/consultationCategories";
import { bookConsultant } from "@/actions/actions";
import ErrorMessage from "../ErrorMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BookingRequest,
  consultationValidationSchema,
} from "@/constants/validation-schemas/validation";
import { useToast } from "@/hooks/use-toast";

const BookConsultationModal = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingRequest>({
    mode: "onChange",
    resolver: zodResolver(consultationValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNo: undefined,
      description: "",
      date: "",
      category: "Tech",
    },
  });

  const onSubmit = async (data: BookingRequest) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const response = await bookConsultant(formData);
    if (response.success) {
      setDialogOpen(false);
      toast({
        title: "Your request has been submitted successfully.",
      });
      reset();
    } else {
      toast({
        variant: "destructive",
        title: "Failed to submit your request",
        description: response.error,
      });
    }
    return response.success;
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(!dialogOpen)}>
      <DialogTrigger asChild>
        <Button size="lg">Book a Consultation</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[500px]">
        <DialogHeader className="">
          <DialogTitle className="mb-6">
            Book a Consultation Session with Us.
          </DialogTitle>
          <DialogDescription className="hidden">
            Book a Consultation Session with Us.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <FloatingLabelInput label="Name">
              <input type="text" required {...register("name")} />
            </FloatingLabelInput>
            <ErrorMessage msg={errors.name?.message} />
          </div>
          <div className="space-y-1">
            <FloatingLabelInput label="Email">
              <input type="email" required {...register("email")} />
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
            <FloatingLabelInput label="Description">
              <textarea {...register("description")} />
            </FloatingLabelInput>
            <ErrorMessage msg={errors.description?.message} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <DateInput
              {...register("date")}
              onChange={(value) => setValue("date", value)}
              required
            />
            <Select
              name="category"
              onValueChange={(
                value: "Tech" | "Legal" | "Business" | "Finance"
              ) => setValue("category", value)}
              required
            >
              <SelectTrigger>
                <SelectValue
                  className="text-center"
                  placeholder="Select Category"
                />
              </SelectTrigger>
              <SelectContent>
                {CONSULTATION_CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <ErrorMessage msg={errors.date?.message} />
            <ErrorMessage msg={errors.category?.message} />
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
              {isSubmitting ? "Submitting" : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookConsultationModal;
