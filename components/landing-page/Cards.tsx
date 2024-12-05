import { ArrowRight } from "lucide-react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  description: string;
  href: string;
  img: string | StaticImageData;
  newTab?: boolean;
  fit?: "contain" | "cover";
};

const CardHorizontal = ({
  title,
  description,
  href,
  img,
  newTab,
  fit,
}: CardProps) => {
  return (
    <div className="rounded-3xl shadow-lg grid sm:grid-cols-[2fr_1fr] overflow-hidden bg-white h-full">
      <div className="pl-4 py-6 space-y-4 grid">
        <h2 className="font-semibold text-xl uppercase">{title}</h2>
        <p className="pr-4">{description}</p>
        <Link
          href={href}
          target={newTab ? "_blank" : "_self"}
          className="text-primary flex gap-2"
        >
          More Details <ArrowRight />
        </Link>
      </div>
      <div className="relative size-full overflow-hidden grid items-center">
        <Image
          src={img}
          width={400}
          height={400}
          className={cn(
            "min-w-full sm:aspect-square",
            fit === "cover" ? "object-cover" : "object-contain"
          )}
          alt=""
        />
      </div>
    </div>
  );
};

const CardVertical = ({ title, description, href, img, newTab }: CardProps) => {
  return (
    <div className="rounded-3xl shadow-lg grid overflow-hidden bg-white h-full">
      <div className="relative overflow-hidden flex justify-center items-center">
        <Image
          src={img}
          width={400}
          height={400}
          className="object-cover size-full hover:scale-[1.75] transition-transform duration-700"
          alt=""
        />
      </div>
      <div className="pl-4 py-6 space-y-4">
        <h2 className="font-semibold text-xl uppercase">{title}</h2>
        <p>{description}</p>
        <Link
          href={href}
          target={newTab ? "_blank" : "_self"}
          className="text-primary flex gap-2"
        >
          More Details <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export { CardHorizontal, CardVertical };
