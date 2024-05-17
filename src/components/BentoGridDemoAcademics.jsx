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

export function BentoGridDemoAcademics() {
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
    title: "Students Chapter ECE",
    description: "From Vision to Victory: Navigating the Highlights",
    header: <img src="./src/assets/deptNews1.png" className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "Students Chapter CSE",
    description: "Legacy Unleashed: A Pinnacle of Excellence.",
    header: <img src="./src/assets/deptNews2.jpeg" className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "IEI Students Chapter ME",
    description: "Seminar on 3D printing and prosthetics",
    header: <img src="./src/assets/deptNews3.jpeg" className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },
  {
    title: "IEEE",
    description: "Inauguration of IEEE Student Branch at AOT",
    header: <img src="./src/assets/deptNews4.jpg" className=" w-full bg-auto bg-center object-cover overflow-hidden"/>,
    
  },

];
