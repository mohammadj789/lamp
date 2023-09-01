import React, { forwardRef } from "react";

export const ProgressBar = forwardRef((props, ref) => {
  return (
    <div
      ref={props.ProgressRef}
      onClick={props.ProgressClickHandlerr}
      className={`${
        props.height ?? "h-1"
      } rounded-sm bg-gray-700 w-full ${
        props.opacity && "bg-white bg-opacity-25"
      }`}
    >
      <div
        className={`h-full rounded-sm bg-white transition-width duration-75 ease-in-out hover:bg-green-600`}
        style={{
          width: `${
            (props.current / (!!props.max ? props.max : 1)) * 100
          }%`,
        }}
      ></div>
    </div>
  );
});
