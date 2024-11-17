import { cn } from "@/lib/utils";

export const Gradient = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-main-gradient -mt-16 grid place-items-center text-white pt-16 pb-24">
      <div className="container grid grid-cols-2 mt-16">{children}</div>
    </div>
  );
};
