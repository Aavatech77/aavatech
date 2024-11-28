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
import { consultationValidationSchema } from "@/constants/validation-schemas/validation";
import { useToast } from "@/hooks/use-toast";

type FormInputs = {
  name: string;
  email: string;
  contactNo: string;
  description: string;
  // date: string;
  // category: string;
};

const BookConsultationModal = () => {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({
    mode: "onChange",
    resolver: zodResolver(consultationValidationSchema),
  });

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("date", date);
    formData.append("category", category);
    const response = await bookConsultant(formData);
    if (response.success) {
      setDialogOpen(false);
      toast({
        title: "Your request has been submitted successfully.",
      });
      reset();
      setDate("");
      setCategory("");
    } else {
      toast({
        variant: "destructive",
        title: "Failed to submit your request",
      });
    }
    return response.success;
  };

  const handleDateChange = (value: string) => {
    setDate(value);
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
              name="date"
              date={date}
              onChange={handleDateChange}
              required
            />
            <Select
              name="category"
              onValueChange={(value) => setCategory(value)}
              defaultValue="Tech"
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
          {/* <div className="space-y-1">
            <ErrorMessage msg={errors.date?.message} />
            <ErrorMessage msg={errors.category?.message} />
          </div> */}

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
