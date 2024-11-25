"use client";
import React from "react";
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
import { useFormState } from "react-dom";
import ErrorMessage from "../ErrorMessage";

const BookConsultationModal = () => {
  const initialState = {
    errors: [],
    success: false,
    data: {},
  };
  const [state, formAction] = useFormState(bookConsultant, initialState);

  const filterErrorMessage = (path: string): string | null => {
    const errorList = state?.errors;
    if (errorList && errorList.length > 0) {
      const err = errorList.find((error) => error.path === path);
      return err ? err.msg : null;
    }
    return null;
  };
  return (
    <Dialog>
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
        <form action={formAction} className="space-y-4">
          <div className="space-y-1">
            <FloatingLabelInput label="Name">
              <input type="text" name="name" required />
            </FloatingLabelInput>
            <ErrorMessage msg={filterErrorMessage("name")} />
          </div>
          <div className="space-y-1">
            <FloatingLabelInput label="Email">
              <input type="email" name="email" required />
            </FloatingLabelInput>
            <ErrorMessage msg={filterErrorMessage("email")} />
          </div>
          <div className="space-y-1">
            <FloatingLabelInput label="Contact No.">
              <input type="tel" name="contactNo" required />
            </FloatingLabelInput>
            <ErrorMessage msg={filterErrorMessage("contactNo")} />
          </div>
          <div className="space-y-1">
            <FloatingLabelInput label="Description">
              <textarea name="description" />
            </FloatingLabelInput>
            <ErrorMessage msg={filterErrorMessage("description")} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <DateInput name="date" required />
            <Select name="category" required>
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
            <ErrorMessage msg={filterErrorMessage("date")} />
            <ErrorMessage msg={filterErrorMessage("category")} />
          </div>

          <div className="flex gap-4 justify-end">
            <Button variant="ghost" type="reset">
              Clear
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookConsultationModal;
