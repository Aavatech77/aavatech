import React from "react";

interface FloatingLabelInputProps {
  label: string;
  children: React.ReactElement;
}

export default function FloatingLabelInput({
  label,
  children,
}: FloatingLabelInputProps) {
  const id = React.useId();
  const child = React.Children.only(children);

  return (
    <div className="relative w-full">
      <div className="relative">
        {React.cloneElement(child, {
          id,
          placeholder: label,
          className: `peer w-full rounded-md border border-gray-200 px-3 py-2 placeholder-transparent focus:border-gray-500 focus:outline-none ${
            child.props.className || ""
          }`,
        })}
        <label
          htmlFor={id}
          className="absolute left-2 -top-2 bg-white px-1 text-xs text-gray-500 transition-all 
            peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-sm 
            peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs"
        >
          {label}
        </label>
      </div>
    </div>
  );
}
