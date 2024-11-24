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

const vacancies: TVacancy[] = [];

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
  if (vacancies.length > 0)
    return (
      <div className="container flex flex-col sm:flex-row gap-4 my-8 md:my-12">
        {vacancies.map((vacancy, index) => (
          <Vacancy {...vacancy} key={index} />
        ))}
      </div>
    );
  else
    return (
      <h2 className="text-2xl font-semibold py-6 md:py-12 container">
        We are not hiring <span className="text-highlight">at the moment.</span>
      </h2>
    );
};

export default Vacancies;
