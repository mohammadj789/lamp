import React from "react";
import Card from "./Card";

export function CardRow(props) {
  return (
    <div className="w-full mt-4 p-3">
      <div
        className="flex
        justify-between"
      >
        <h2 className="font-bold text-xl text-white mb-1">
          {props.title}
        </h2>
        <button className="text-xs text-gray-300">Show More</button>
      </div>
      <div className=" flex flex-nowrap gap-[calc(10%/5)] lg:gap-[calc(10%/4)] md:gap-[calc(10%/3)] sm:gap-[calc(10%/2)] overflow-hidden">
        {props.data.map((item) => (
          <div className="w-[calc(90%/6)]  lg:w-[calc(90%/5)] md:w-[calc(90%/4)] sm:w-[calc(90%/3)] flex-shrink-0 ">
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
}
