import React from "react";
import Image from "next/image";
import AnimateInView from "@/components/animate/AnimateInView";

const teams = [
  {
    pic: "https://blog.investiaa.com/team_photos/team1.png",
    name: "Barsha Rajbhandari",
    post: "Director",
  },
  {
    pic: "https://blog.investiaa.com/team_photos/team2.png",
    name: "CA. Rishi Pokhrel",
    post: "Finance Expert",
  },
  {
    pic: "https://blog.investiaa.com/team_photos/team3.png",
    name: "Susan Chapagai",
    post: "CEO",
  },
  {
    pic: "https://blog.investiaa.com/team_photos/team4.png",
    name: "Assoc.Prof. Pramod Poudel",
    post: "Academic Advisor",
  },
  {
    pic: "https://blog.investiaa.com/team_photos/team5.png",
    name: "Biplab Karki",
    post: "International Relation Advisor",
  },
  {
    pic: "https://blog.investiaa.com/team_photos/team6.png",
    name: "Advocate Radha Krishna Pathak",
    post: "Legal Advisor",
  },
];

const TeamsCard = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
      {teams.map((team, index) => (
        <div
          key={index}
          className="bg-[#4874AE]/10 p-4 rounded-md flex flex-col items-center"
        >
          <Image
            src={team.pic}
            alt={team.name}
            width={100}
            height={100}
            className="size-20 rounded-full overflow-hidden object-cover bg-white"
          />
          <h2 className="font-medium mt-2 text-lg">{team.name}</h2>
          <p>{team.post}</p>
        </div>
      ))}
    </div>
  );
};
function Team() {
  return (
    <div className="container mt-8 mb-8">
      <AnimateInView type="scale">
        <h1 className="text-3xl mb-8 font-bold">Our Team</h1>
        <TeamsCard />
      </AnimateInView>
    </div>
  );
}

export default Team;
