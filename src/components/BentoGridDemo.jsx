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
import { Link,NavLink } from "react-router-dom";

import news1 from "../assets/news1.jpg";
import news2 from "../assets/news20.jpg";
import news3 from "../assets/news2.jpg";
import news4 from "../assets/news21.jpg";
import news7 from "../assets/news13.jpg";
import news8 from "../assets/news4.jpg";

export function BentoGridDemo() {
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
    title: "Interhackative Prizes",
    description: "Prizes of inter college hackathon distribution.",
    header: <img src={news1} className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "Arcadia ’23",
    description: " AOT unleashed its inner rhythm to witness an enthralling journey.",
    header: <img src={news2} className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "Synapse",
    description: "A small quiz competition hosted by SC ECE.",
    header: <img src={news3} className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "Techfiesta ’24",
    description:"All the tech,cultural and exciting events in one zone.",
    header: <img src={news4} className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "Arcadia ’23",
    description: "One of the biggest cultural fest in West Bengal.",
    header: <img src={news5} className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <img src={news6} className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,

  },

];

