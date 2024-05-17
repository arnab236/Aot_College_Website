import React from "react";
import { cn } from "./utils/cn";
 
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-4 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};
 
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 group/bento hover:shadow-xl hover:shadow-[rgba(0,0,0,0.4)] transition duration-200 shadow-input dark:shadow-none p-4 hover:bg-[rgba(0,0,0,0.2)] justify-between flex flex-col space-y-4 hover:-translate-y-3 h-full w-full bg-[rgba(17,25,40,0.7)] rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-4 transition duration-200 ">
        {icon}
        <div className="font-[para] font-bold text-xs md:text-lg text-neutral-600 dark:text-neutral-200 mb-2 mt-2 ">
          {title}
        </div>
        <div className="font-[para] font-normal text-neutral-600 text-xs dark:text-neutral-300 text-wrap">
          {description}
        </div>
      </div>
    </div>
  );
};