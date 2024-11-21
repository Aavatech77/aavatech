"use client";
import React from "react";
import { Button } from "./ui/button";

type Props = {
  options: { label: string; tab: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setActiveTab: (value: any) => void;
};

const Tabs = ({ options, setActiveTab }: Props) => {
  return (
    <div className="container flex flex-wrap gap-4 mb-8">
      {options.map((option) => (
        <Button
          variant="ghost"
          key={option.label}
          onClick={() => setActiveTab(option.tab)}
          className="rounded-none border-r border-r-red-500 last-of-type:border-r-0 font-semibold"
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
