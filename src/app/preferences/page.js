"use client";
import React, { useState } from "react";
import { LoremIpsum } from "lorem-ipsum";
import Button from "@/app/ui/Button";
import { GenreCard } from "@/app/ui/preference/Card";

const lorem = new LoremIpsum();

const placeholders = [
  {
    image: "/basketball.png",
    name: "this is a placeholder",
  },
  {
    image: "/basketball.png",
    name: "this is a placeholde",
  },
  {
    image: "/basketball.png",
    name: "this is a placeholdr",
  },
  {
    image: "/basketball.png",
    name: "this is a placeholer",
  },
  {
    image: "/basketball.png",
    name: "this is a placehoder",
  },
  {
    image: "/basketball.png",
    name: "this is a placehlder",
  },
  {
    image: "/basketball.png",
    name: "this is a placeolder",
  },
  {
    image: "/basketball.png",
    name: "this is a placholder",
  },
  {
    image: "/basketball.png",
    name: "this is a plaeholder",
  },
  {
    image: "/basketball.png",
    name: "this is a plceholder",
  },
];

// const loremText = lorem.generateSentences(number);

export default function Preferences() {
  const [selectedCards, setSelectedCards] = useState([]);

  const StoreCard = (item) => {
    // delete item if it is present in array
    if (selectedCards.includes(item.name)) {
      setSelectedCards((prev) => {
        const updatedCards = prev.filter((name) => name !== item.name);
        // console.log(selectedCards);
        return updatedCards;
      });
    } else {
      // store item if it in array
      setSelectedCards((prev) => {
        const updatedCards = [...prev, item.name];
        // console.log(updatedCards);
        return updatedCards;
      });
    }
  };

  const SubmitCards = () => {
    // Handle selected cards
    console.log(selectedCards);
  };

  return (
    <main className="p-3">
      <section className="h-32 flex flex-col justify-end items-start pl-4">
        <h6 className="text-sm sm:text-lg font-bold uppercase">
          {/* {lorem.generateWords(7)} */} sifwie jaieowieow aieow i
        </h6>
        <p>dfowfieffwo awie fiwe</p>
      </section>
      <section className="flex gap-4 flex-wrap justify-evenly mt-5 ">
        {placeholders.map((item) => (
          <div className="" key={item.name}>
            <GenreCard
              image={item.image}
              name={item.name}
              isSelected={selectedCards.includes(item.name)}
              handleClick={() => StoreCard(item)}
            />
          </div>
        ))}
      </section>
      <div style={{ marginBottom: "56px" }}></div>
      <div className="fixed bottom-5 w-full flex justify-center items-start">
        <Button string="Next" link="../authors" onclick={SubmitCards} />
      </div>
    </main>
  );
}
