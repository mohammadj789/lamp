import { ProgressBar } from "../ui/ProgressBar";

export function Optioans(props) {
  let volumeState;
  if (props.volume.current === 0 || props.volume.mute)
    volumeState = (
      <ion-icon
        style={{
          fontSize: "21px",
        }}
        name="volume-mute-outline"
      ></ion-icon>
    );
  else if (props.volume.current > 0.66)
    volumeState = (
      <ion-icon
        style={{
          fontSize: "21px",
        }}
        name="volume-high-outline"
      ></ion-icon>
    );
  else if (props.volume.current > 0.33)
    volumeState = (
      <ion-icon
        style={{
          fontSize: "21px",
        }}
        name="volume-medium-outline"
      ></ion-icon>
    );
  else if (props.volume.current > 0)
    volumeState = (
      <ion-icon
        style={{
          fontSize: "21px",
        }}
        name="volume-low-outline"
      ></ion-icon>
    );

  return (
    <div className="w-full max-w-[17rem] gap-1 cursor-pointer sm:hidden flex items-center">
      <button
        className={`text-gray-400 rounded-full flex items-center h-8 w-8 p-1 hover:text-white`}
      >
        <ion-icon
          style={{
            fontSize: "22px",
          }}
          name="reorder-four-outline"
        ></ion-icon>
      </button>
      <button
        className={`text-gray-400 rounded-full flex items-center h-8 w-8 p-1 hover:text-white`}
      >
        <ion-icon
          style={{
            fontSize: "19px",
          }}
          name="reader-outline"
        ></ion-icon>
      </button>
      <button
        className={`text-gray-400 rounded-full flex items-center h-8 w-8 p-1 hover:text-white`}
        onClick={props.muteHaddler}
      >
        {volumeState}
      </button>

      <ProgressBar
        current={props.volume.current * 100}
        max={100}
        ProgressClickHandlerr={props.volumeProgressClickHandlerr}
      />
      <button
        className={`text-gray-400 rounded-full flex items-center h-8 w-8 p-1 hover:text-white`}
      >
        <ion-icon
          style={{
            fontSize: "21px",
          }}
          name="people-outline"
        ></ion-icon>
      </button>
    </div>
  );
}
