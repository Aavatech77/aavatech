import { cn } from "@/lib/utils";

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("max-w-[1440px] mx-auto px-2.5 md:px-20 w-full", className)}
    >
      {children}
    </div>
  );
};
