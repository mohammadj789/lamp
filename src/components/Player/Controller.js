import { convertSecondsToMMSS } from "../../utils/secondsToMuinets";
import { ProgressBar } from "../ui/ProgressBar";
import { ControllButtons } from "./ControllButtons";

export function Controller(props) {
  return (
    <div className=" flex justify-center items-center w-full flex-col gap-3 max-w-[43rem]">
      <ControllButtons
        setPlayHandler={props.setPlayHandler}
        play={props.play}
        setPauseHandler={props.setPauseHandler}
      />
      <div className="w-full flex items-center justify-center gap-2">
        <span className="text-[.67rem] font-medium line text-gray-400">
          {convertSecondsToMMSS(props.curTime)}
        </span>

        <ProgressBar
          current={props.curTime}
          max={props.duration}
          ProgressClickHandlerr={props.audioProgressClickHandlerr}
          ProgressRef={props.audioProgress}
        />

        <span className="text-[.67rem] font-medium line text-gray-400">
          {props.duration
            ? convertSecondsToMMSS(props.duration)
            : "00:00"}
        </span>
      </div>
    </div>
  );
}
