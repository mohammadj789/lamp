import React from "react";

import { Detail } from "./Detail";
import { Controller } from "./Controller";
import { Optioans } from "./Options";

export const Player = (props) => {
  return (
    <div className="flex h-20 justify-between col-span-full px-3 sm:hidden bg-black  items-center w-full gap-3 text-white p-2 ">
      <Detail
        title={props.title}
        credit={props.credit}
        image={props.image}
      />
      <Controller
        play={props.play}
        curTime={props.curTime}
        setPauseHandler={props.setPauseHandler}
        setPlayHandler={props.setPlayHandler}
        audioProgress={props.audioProgress}
        audioProgressClickHandlerr={props.audioProgressClickHandlerr}
        duration={props.duration}
      />
      <Optioans
        muteHaddler={props.muteHaddler}
        volumeProgress={props.volumeProgress}
        volumeProgressClickHandlerr={
          props.volumeProgressClickHandlerr
        }
        volume={props.volume}
      />
    </div>
  );
};
