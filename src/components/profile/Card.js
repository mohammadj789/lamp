import React from "react";

const Card = (props) => {
  return (
    <div className="font-normal flex-shrink-0 aspect-[4/5] gap-1 rounded-md flex flex-col items-center justify-start hover:bg-white/30 overflow-hidden text-white p-1  group">
      <div className="aspect-square  flex-shrink-0  h-[68%] my-[1%] relative">
        <img
          alt="card thumbnail"
          className="object-cover rounded-md w-full h-full"
          src="/girl.jpg"
        />
        <button className="absolute p-2 bottom-1 opacity-0 transition-all translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 right-1 grid place-content-center rounded-full w-1/4 aspect-square bg-green-500 ">
          <ion-icon name="play" />
        </button>
      </div>
      <p className="line-clamp-1 font-semibold text-base sm:text-sm flex-shrink-0 px-2">
        Rap Cavier
      </p>
      <p className="line-clamp-2 text-gray-400 text-sm sm:text-xs flex-shrink-0 sm:line-clamp-1 px-2">
        travis scott, drake, lil durk, 21 Savage, JCole, kanye west
      </p>
    </div>
  );
};

export default Card;
