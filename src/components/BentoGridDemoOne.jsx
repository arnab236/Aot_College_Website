import { cn } from "./ui/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemoOne() {
  return (
    <BentoGrid className="max-w-3xl md:max-w-7xl mx-auto p-4" >
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 1 || i === 3 ? "col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <img src="./news3.jpg" className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "StartUp Talks by two of our shining students.",
    description: "A valuable experience of their journey to build a startup given by Ronit and Subhrokamal.",
    header: <img src="./news22.jpg" className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "SIH 2023",
    description: "A remarkable contribution by students.",
    header: <img src="./news28.jpeg" className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "AOT-Agile",
    description:
      "A great sports torunament organised in AOT.",
    header: <img src="./news24.jpg" className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <img src="./news17.jpg" className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "Techtrix",
    description: "Experience the thrill of bringing ideas to life.",
    header: <img src="./news29.jpg" className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,

  },

];
