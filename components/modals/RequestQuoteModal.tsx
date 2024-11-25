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
import ErrorMessage from "../ErrorMessage";
import { requestQuote } from "@/actions/actions";
import { useFormState } from "react-dom";

const RequestQuoteModal = () => {
  const initialState = {
    errors: [],
    success: false,
    data: {},
  };
  const [state, formAction] = useFormState(requestQuote, initialState);

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
            <FloatingLabelInput label="Timeline (In Months)">
              <input type="tel" name="timeline" required />
            </FloatingLabelInput>
            <ErrorMessage msg={filterErrorMessage("timeline")} />
          </div>
          <div className="space-y-1">
            <FloatingLabelInput label="Budget (In NRS)">
              <input type="tel" name="budget" required />
            </FloatingLabelInput>
            <ErrorMessage msg={filterErrorMessage("budget")} />
          </div>
          <div className="space-y-1">
            <FloatingLabelInput label="Description">
              <textarea name="description" />
            </FloatingLabelInput>
            <ErrorMessage msg={filterErrorMessage("description")} />
          </div>
          {/* {JSON.stringify(state)} */}
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

export default RequestQuoteModal;

// name email contact || description date category
//                    || project description timeline budget
