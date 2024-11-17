import { cn } from "@/lib/utils";

export const HeroGradient = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-main-gradient -mt-16 min-h-screen grid place-items-center text-white">
      <div className="container grid place-items-center md:grid-cols-2 md:min-h-[600px]">
        {children}
      </div>
    </div>
  );
};
