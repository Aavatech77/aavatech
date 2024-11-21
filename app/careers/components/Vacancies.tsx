import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";

type TVacancy = {
  title: string;
  role: string;
  date: string;
  description: string;
  href: string;
};

const Vacancy = ({ title, role, date, description, href }: TVacancy) => {
  return (
    <div className="p-4 border border-[#b7b1b1] rounded-xl space-y-4 font-semibold">
      <p className="text-xl text-highlight">{title}</p>
      <p className="">{role}</p>
      <p className="font-medium">
        <Calendar className="inline size-4" /> Post Date: {date}
      </p>
      <p className="font-normal line-clamp-3 text-ellipsis text-sm">
        {description}
      </p>
      <Button asChild>
        <Link href={href} className="block mt-8">
          View Details
        </Link>
      </Button>
    </div>
  );
};

const Vacancies = () => {
  const vacancies: TVacancy[] = [
    {
      title: "Designer",
      role: "UI/UX Designer",
      date: "2024/11/18",
      description:
        "We are hiring a Junior Content Writer. As a junior content writer, you will create content for various platforms, including Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quas?",
      href: "/",
    },
    {
      title: "Designer",
      role: "UI/UX Designer",
      date: "2024/11/18",
      description:
        "We are hiring a Junior Content Writer. As a junior content writer, you will create content for various platforms, including Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quas?",
      href: "/",
    },
    {
      title: "Designer",
      role: "UI/UX Designer",
      date: "2024/11/18",
      description:
        "We are hiring a Junior Content Writer. As a junior content writer, you will create content for various platforms, including Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quas?",
      href: "/",
    },
  ];
  return (
    <div className="container flex flex-col sm:flex-row gap-4 my-8 md:my-12">
      {vacancies.map((vacancy, index) => (
        <Vacancy {...vacancy} key={index} />
      ))}
    </div>
  );
};

export default Vacancies;
