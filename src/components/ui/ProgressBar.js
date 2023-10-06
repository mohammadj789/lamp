import React, { forwardRef } from "react";
import ReactSlider from "react-slider";

export const ProgressBar = forwardRef((props, ref) => {
  return (
    <ReactSlider
      className={`${
        props.height ?? "h-1"
      } w-full h-1 rounded-3xl group`}
      thumbClassName=" aspect-square h-[180%] rounded-full bg-white opacity-0 group-hover:opacity-100 top-[-40%] !outline-none"
      // thumbClassName="hidden"
      // thumbActiveClassName=""
      trackClassName="bg-white bg-opacity-25  first:bg-white h-full rounded-3xl group-hover:first:bg-green-600"
      value={props.current}
      max={!!props.max ? props.max : 1}
      min={0}
      onChange={props.ProgressClickHandlerr}
    />
  );
});
