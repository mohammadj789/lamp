import { convertSecondsToMMSS } from "../../utils/secondsToMuinets";
import { ProgressBar } from "../ui/ProgressBar";
import { ControllButtons } from "./ControllButtons";

export function MobileFullPlayer(props) {
  return (
    <div
      className={`fixed hidden sm:flex gap-6 flex-col z-50 bg-slate-700 w-full h-full translate-y-[100%] transition-all text-white  p-3 overflow-hidden ${props.classes}`}
    >
      <div className=" h-20 flex-shrink-0 flex justify-between items-center">
        <button
          onClick={props.hidehandller}
          className="flex justify-center items-center min-w-[48px]"
        >
          <ion-icon
            style={{
              fontSize: "32px",
            }}
            name="chevron-down"
          ></ion-icon>
        </button>
        <p className="w-full text-center text-[.7rem] font-medium">
          Metro Boomin
        </p>
        <button className="flex justify-center items-center min-w-[48px]">
          <ion-icon
            style={{
              fontSize: "26px",
            }}
            name="ellipsis-horizontal"
          ></ion-icon>
        </button>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="/girl.jpg"
          className="h-auto w-full aspect-square rounded max-w-xs max-h-80 object-cover "
          alt=" cover"
        />
      </div>
      <div className=" h-64 flex-shrink-0 overflow-hidden flex flex-col justify-between pb-7">
        <div className="flex">
          <div className="flex flex-col w-full overflow-hidden px-2">
            <p className="whitespace-nowrap text-white text-2xl font-bold">
              Creapin
            </p>
            <p className="whitespace-nowrap text-base font-normal text-gray-300">
              Metro Boomin, The Weekend Metro Boomin
            </p>
          </div>
          <button className="flex justify-center items-center min-w-[48px] text-gray-300">
            <ion-icon
              style={{
                fontSize: "30px",
              }}
              name="heart-outline"
            ></ion-icon>
          </button>
        </div>
        <div className="flex flex-col px-2">
          <ProgressBar
            opacity
            height={"h-2"}
            current={props.curTime}
            max={props.audio.duration}
            ProgressClickHandlerr={props.audioProgressClickHandlerr}
          />
          <div className="flex justify-between">
            <p className="text-xs text-gray-300">
              {convertSecondsToMMSS(props.curTime)}
            </p>
            <p className="text-xs text-gray-300">
              {props.audio.duration
                ? convertSecondsToMMSS(props.audio.duration)
                : "00:00"}
            </p>
          </div>
        </div>

        <ControllButtons
          play={props.play}
          setPlayHandler={props.setPlayHandler}
          setPauseHandler={props.setPauseHandler}
          size="h-14 w-14"
          playsize={"25px"}
          pausesize={"30px"}
          svgsize={"32px"}
        />
      </div>
    </div>
  );
}
