export function FloatingHeader(props) {
  return (
    <div className="w-full bg-transparent absolute flex justify-between p-2 z-50">
      <div className="flex items-center gap-2">
        <button
          onClick={() => props.setPlayList((prev) => !prev)}
          className="flex items-center justify-center bg-black bg-opacity-30 text-white rounded-full h-9 w-9 "
        >
          <ion-icon
            style={{
              fontSize: "24px",
            }}
            className="text-center"
            name="chevron-back-outline"
          ></ion-icon>
        </button>
        <button
          onClick={() => props.setPlayList((prev) => !prev)}
          className="flex items-center justify-center bg-black bg-opacity-30 text-white rounded-full h-9 w-9 "
        >
          <ion-icon
            style={{
              fontSize: "24px",
            }}
            className="text-center"
            name="chevron-forward-outline"
          ></ion-icon>
        </button>
      </div>
      <button
        onClick={() => props.setPlayList(null)}
        className="h-fit"
      >
        <img
          src="/girl.jpg"
          className="w-10 h-10 object-cover rounded-full border-[6px] border-zinc-800 border-opacity-80"
          alt="profile"
        />
      </button>
    </div>
  );
}
