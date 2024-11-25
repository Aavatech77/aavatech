"use client";

import { Calendar } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

interface DateInputProps {
  name: string;
  required?: boolean;
  defaultValue?: string;
  className?: string;
}

export default function DateInput({
  name,
  required = false,
  defaultValue = "",
  className = "",
}: DateInputProps) {
  const { pending } = useFormStatus();
  const [displayValue, setDisplayValue] = useState(defaultValue);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    setDisplayValue(formattedDate);
  };

  return (
    <div className="relative">
      <input
        type="date"
        name={name}
        id={name}
        required={required}
        disabled={pending}
        defaultValue={defaultValue}
        onChange={handleChange}
        ref={dateInputRef}
        className={`
          opacity-0 block w-full rounded-md 
          px-4 py-2
          ${className}
          [&::-webkit-calendar-picker-indicator]:bg-transparent
          [&::-webkit-calendar-picker-indicator]:hover:cursor-pointer
          [&:: -webkit-calendar-picker-indicator]:absolute 
          [&::-webkit-calendar-picker-indicator]:right-2
          [&::-webkit-calendar-picker-indicator]:p-2
        `}
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          dateInputRef.current?.showPicker();
        }}
        className="absolute inset-0 rounded-md border border-gray-200 px-3 py-2 focus:border-gray-500"
      >
        <div className="flex justify-between items-center text-gray-700">
          <p className="flex-1 text-sm text-left">
            {displayValue ? displayValue : "Select Date"}
          </p>
          <Calendar className="size-5 text-inherit" />
        </div>
      </button>
    </div>
  );
}
