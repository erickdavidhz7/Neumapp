import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";

export default function TeamCard({
  image,
  person,
  description,
  role,
  key,
  gender,
  social,
}) {
  return (
    <article className="flex flex-col  items-center md:flex-row gap-4 lg:gap-6 w-full sm:w-[90%] mx-auto ">
      <CardImg
        key={key}
        person={person}
        image={image}
        role={role}
        gender={gender}
        social={social}
      />
      <div
        className={
          gender === "female"
            ? "w-[60%] h-auto text-secondInk rounded-2xl bg-secondInk-500 py-4 px-3 lg:py-8 lg:px-6 shadow-lg shadow-slate-500"
            : "w-[60%] h-auto text-secondInk rounded-2xl bg-firstInk-500 py-4 px-3 lg:py-8 lg:px-6 shadow-lg shadow-slate-500"
        }
      >
        <p className={"text-sm text-white text-center mt-2 tracking-wide "}>
          {description}
        </p>
      </div>
    </article>
  );
}

export function CardImg({ key, image, person, role, gender, social }) {
  return (
    <Card
      shadow="sm"
      key={key + person}
      isPressable
      onPress={() => window.open(social)}
      className={
        gender === "female"
          ? "w-3/5 rounded-xl object-cover border-[0.2rem] border-secondInk/50 shadow-xl shadow-secondShadow-800/40"
          : "w-3/5 rounded-xl object-cover border-[0.2rem] border-firstInk/50 shadow-xl shadow-firstShadow-800/40"
      }
    >
      <CardBody className="p-0">
        <Image
          shadow="sm"
          radius="sm"
          className="w-full "
          alt={person}
          src={image}
        />
      </CardBody>
      <CardFooter
        radius="none"
        className={
          gender === "female"
            ? "text-small justify-between bg-secondInk-500"
            : "text-small justify-between bg-firstInk-500"
        }
      >
        <b className=" text-white ">{person}</b>
        <p className=" text-secondInk-100 ">{role}</p>
      </CardFooter>
    </Card>
  );
}
