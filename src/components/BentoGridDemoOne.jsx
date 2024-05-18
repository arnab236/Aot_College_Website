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

import news7 from "../assets/news3.jpg";
import news8 from "../assets/news22.jpg";
import news9 from "../assets/news28.jpeg";
import news10 from "../assets/news24.jpg";
import news11 from "../assets/news17.jpg";
import news12 from "../assets/news29.jpg";

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
    header: <img src={news7} className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "StartUp Talks by two of our shining students.",
    description: "A valuable experience of their journey to build a startup given by Ronit and Subhrokamal.",
    header: <img src={news8} className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "SIH 2023",
    description: "A remarkable contribution by students.",
    header: <img src={news9} className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "AOT-Agile",
    description:
      "A great sports torunament organised in AOT.",
    header: <img src={news10} className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <img src={news11}className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "Techtrix",
    description: "Experience the thrill of bringing ideas to life.",
    header: <img src={news12} className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,

  },

];
