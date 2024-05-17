import { cn } from "./ui/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid-dept";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemoAcademicsOne() {
  return (
    <BentoGrid className="max-w-3xl md:max-w-7xl mx-auto p-4" >
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "KPIT SPARKLE’23",
    description:"A dazzling showcase of creaticity by Team Magnifier.",
    header: <img src="./src/assets/deptNews5.jpg" className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "An overview of Code’tsav 1.0",
    description: "Coding event organised by Student’s Chapter EEE.",
    header: <img src="./src/assets/deptNews6.png" className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "Revolutionizing Communication",
    description: "A great innovation by Team Anonymous Hacker.",
    header: <img src="./src/assets/deptNews7.webp" className=" w-full h-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "Capture the flags",
    description: "Students of AOT making strides in competitions.",
    header: <img src="./src/assets/deptNews8.png" className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,

  },

];
