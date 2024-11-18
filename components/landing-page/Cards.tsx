import { ArrowRight } from "lucide-react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  href: string;
  img: string | StaticImageData;
};

const CardHorizontal = ({ title, description, href, img }: CardProps) => {
  return (
    <div className="rounded-3xl shadow-lg grid grid-cols-[2fr_1fr] overflow-hidden">
      <div className="pl-4 py-6 space-y-4">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p>{description}</p>
        <Link href={href} className="text-primary flex gap-2">
          More Details <ArrowRight />
        </Link>
      </div>
      <div className="relative size-full ">
        <Image
          src={img}
          width={400}
          height={400}
          className="object-cover size-full"
          alt=""
        />
      </div>
    </div>
  );
};

const CardVertical = ({ title, description, href, img }: CardProps) => {
  return (
    <div className="rounded-3xl shadow-lg grid overflow-hidden">
      <div className="relative size-full overflow-hidden">
        <Image
          src={img}
          width={400}
          height={400}
          className="object-cover size-full hover:scale-150 transition-transform duration-700"
          alt=""
        />
      </div>
      <div className="pl-4 py-6 space-y-4">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p>{description}</p>
        <Link href={href} className="text-primary flex gap-2">
          More Details <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export { CardHorizontal, CardVertical };
