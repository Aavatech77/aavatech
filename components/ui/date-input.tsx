"use client";
import { forwardRef, useState } from "react";
import { Calendar } from "lucide-react";
import { ChangeEvent, useRef } from "react";

interface DateInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: string) => void;
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    { onChange, ...props },
    ref // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => {
    const dateInputRef = useRef<HTMLInputElement>(null);
    const [displayDate, setDisplayDate] = useState<string>(
      props.value as string
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const date = new Date(e.target.value);
      const formattedDate = date.toISOString().split("T")[0];
      setDisplayDate(formattedDate);
      onChange?.(formattedDate);
    };

    return (
      <div className="relative">
        <input
          type="date"
          onChange={handleChange}
          ref={dateInputRef}
          {...props}
          className={`
          opacity-0 block w-full rounded-md 
          px-4 h-9
          ${props.className}
          [&::-webkit-calendar-picker-indicator]:bg-transparent
          [&::-webkit-calendar-picker-indicator]:hover:cursor-pointer
          [&::-webkit-calendar-picker-indicator]:absolute 
          [&::-webkit-calendar-picker-indicator]:right-2
          [&::-webkit-calendar-picker-indicator]:p-2
        `}
          aria-hidden
          tabIndex={-1}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            dateInputRef.current?.showPicker();
          }}
          className="absolute inset-0 rounded-md border border-gray-200 px-3 py-2 focus:border-gray-500 focus-visible:outline-none focus-visible:border-gray-500"
        >
          <div className="flex justify-between items-center text-gray-700">
            <p className="flex-1 text-sm text-left">
              {displayDate
                ? new Date(displayDate).toLocaleDateString()
                : "Select Date"}
            </p>
            <Calendar className="size-5 text-inherit" />
          </div>
        </button>
      </div>
    );
  }
);

DateInput.displayName = "DateInput";

export default DateInput;
