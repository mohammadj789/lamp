export function ControllButtons(props) {
  return (
    <div className="flex gap-6 sm:gap-0 justify-between items-center">
      <button
        className={`text-gray-400 rounded-full ${
          props.size ?? "h-8 w-8"
        } p-1  hover:text-white`}
        onClick={props.setPlayHandler}
      >
        <ion-icon
          style={{
            fontSize: props.svgsize ?? "23px",
          }}
          name="shuffle"
        ></ion-icon>
      </button>
      <button
        className={`text-gray-400 rounded-full ${
          props.size ?? "h-8 w-8"
        } p-1  hover:text-white`}
        onClick={props.setPlayHandler}
      >
        <ion-icon
          style={{
            fontSize: props.svgsize ?? "23px",
          }}
          name="play-skip-back"
        ></ion-icon>
      </button>
      {!props.play ? (
        <button
          className={`flex items-center justify-center bg-white text-black rounded-full flex-shrink-0 ${
            props.size ?? "h-8 w-8"
          } ps-[.4rem]  p-1`}
          onClick={props.setPlayHandler}
        >
          <ion-icon
            style={{
              fontSize: props.playsize ?? "19px",
            }}
            name="play"
          ></ion-icon>
        </button>
      ) : (
        <button
          className={`flex items-center justify-center bg-white text-black rounded-full flex-shrink-0 ${
            props.size ?? "h-8 w-8"
          } `}
          onClick={props.setPauseHandler}
        >
          <ion-icon
            style={{
              fontSize: props.pausesize ?? "21px",
            }}
            className="text-center"
            name="pause"
          ></ion-icon>
        </button>
      )}
      <button
        className={`text-gray-400 rounded-full ${
          props.size ?? "h-8 w-8"
        } p-1  hover:text-white`}
        onClick={props.setPlayHandler}
      >
        <ion-icon
          style={{
            fontSize: props.svgsize ?? "23px",
          }}
          name="play-skip-forward"
        ></ion-icon>
      </button>
      <button
        className={`text-gray-400 rounded-full ${
          props.size ?? "h-8 w-8"
        } p-1  hover:text-white`}
        onClick={props.setPlayHandler}
      >
        <ion-icon
          style={{
            fontSize: props.svgsize ?? "23px",
          }}
          name="repeat"
        ></ion-icon>
      </button>
    </div>
  );
}
