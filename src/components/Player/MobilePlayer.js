import { ProgressBar } from "../ui/ProgressBar";

export function MobilePlayer(props) {
  return (
    <div className="h-14 hidden pt-[.35rem] px-2 sm:grid rounded-md grid-cols-1 overflow-hidden bg-amber-500 w-[calc(100%-1rem)] fixed bottom-20 mx-2">
      <div className="flex gap-2 items-center">
        <img
          onClick={props.openPlayer}
          className={`w-10 h-10 object-cover flex-shrink-0 rounded-sm`}
          src={"/girl.jpg" ?? "/montain.jpg"}
          alt="inventory item"
        />
        <div
          onClick={props.openPlayer}
          className="font-medium flex flex-col w-full overflow-hidden"
        >
          <p className="whitespace-nowrap font-[500]">Creapin</p>
          <p className="whitespace-nowrap text-xs">
            Metro Boomin, The Weekend Metro Boomin
          </p>
        </div>
        <div className="flex items-center justify-around min-w-[88px]">
          <button className="flex items-center">
            <ion-icon
              style={{
                fontSize: "26px",
              }}
              name="heart-outline"
            ></ion-icon>
          </button>

          {!props.play ? (
            <button
              className="flex items-center"
              onClick={props.setPlayHandler}
            >
              <ion-icon
                style={{
                  fontSize: "26px",
                }}
                name="play"
              ></ion-icon>
            </button>
          ) : (
            <button
              className="flex items-center"
              onClick={props.setPauseHandler}
            >
              <ion-icon
                style={{
                  fontSize: "26px",
                }}
                name="pause"
              ></ion-icon>
            </button>
          )}
        </div>
      </div>
      <div className="self-end">
        <ProgressBar
          height="h-[.15rem]"
          current={props.curTime}
          max={props.duration}
          ProgressClickHandlerr={null}
          ProgressRef={null}
        />
      </div>
    </div>
  );
}
