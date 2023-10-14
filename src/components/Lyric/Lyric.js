import { useEffect, useRef } from "react";
import { LyricLine } from "./LyricLine";

export function Lyric({ data, curTime, changeHandler }) {
  const next = useRef();

  const changeTimeHandler = (time) => {
    changeHandler(time);
  };

  useEffect(() => {
    next?.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }, [curTime]);

  return (
    <div className="h-full sm:pb-16 w-full min-w-[41rem] sm:w-screen sm:min-w-[20rem] pt-8 text-black text-lg overflow-auto bg-orange-600 font-semibold">
      <div
        dir="rtl"
        className="flex flex-col gap-5 rtl:items-end rtl:pe-40 rtl:ps-3 items-start ps-40 pe-3 w-full sm:rtl:pe-6 sm:ps-6 overflow-hidden"
      >
        {data.map((item, i, ar) => {
          const Checkcurrent =
            curTime >= item.time && curTime <= ar?.[i + 1]?.time;
          return (
            <LyricLine
              ref={Checkcurrent ? next : undefined}
              isCurrent={Checkcurrent}
              passed={curTime >= item.time ? true : false}
              detail={item}
              key={item.time}
              onClick={changeTimeHandler}
            />
          );
        })}
      </div>
    </div>
  );
}
