import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import Button from "@/app/ui/Button";
import { AuthorCard } from "@/app/ui/preference/Card";

const lorem = new LoremIpsum();

const placeholders = [
  {
    image: "/basketball.png",
    name: `${lorem.generateWords(3)}`,
  },
  {
    image: "/basketball.png",
    name: `${lorem.generateWords(3)}`,
  },
  {
    image: "/basketball.png",
    name: `${lorem.generateWords(3)}`,
  },
  {
    image: "/basketball.png",
    name: `${lorem.generateWords(3)}`,
  },
  {
    image: "/basketball.png",
    name: `${lorem.generateWords(3)}`,
  },
  {
    image: "/basketball.png",
    name: `${lorem.generateWords(3)}`,
  },
  {
    image: "/basketball.png",
    name: `${lorem.generateWords(3)}`,
  },
  {
    image: "/basketball.png",
    name: `${lorem.generateWords(3)}`,
  },
  {
    image: "/basketball.png",
    name: `${lorem.generateWords(3)}`,
  },
  {
    image: "/basketball.png",
    name: `${lorem.generateWords(3)}`,
  },
];

// const loremText = lorem.generateSentences(number);

export default function Authors() {
  return (
    <main className="p-3 ">
      <section className="h-32 flex flex-col justify-end items-start">
        {/* Generating dummy text as placeholder */}
        <h6 className="text-sm sm:text-lg font-bold uppercase">
          {lorem.generateWords(7)}
        </h6>
        <p>{lorem.generateWords(10)}</p>
      </section>
      <section className="flex gap-4 flex-wrap justify-center mt-5">
        {placeholders.map((item) => (
          <div key={item.name}>
            <AuthorCard image={item.image} name={item.name} path={"../home"} />
          </div>
        ))}
      </section>
      <div className="w-full bg-green-200 flex justify-center">
        <Button string="Next" link="../home" />
      </div>
    </main>
  );
}
