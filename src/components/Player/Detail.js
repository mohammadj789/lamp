export function Detail(props) {
  return (
    <div className="max-w-sm w-1/4 overflow-hidden flex-shrink-0 text-gray-100 flex relative items-center py-2 gap-4">
      <img
        className={`w-12 h-12 object-cover flex-shrink-0 rounded-md`}
        src={props.image ?? "/montain.jpg"}
        alt="inventory item"
      />
      <div className="font-medium flex w-auto flex-col">
        <p className="whitespace-nowrap font-[500]">{props.title}</p>
        <p className="whitespace-nowrap text-xs text-gray-400">
          {props.credit}
        </p>
      </div>

      <button className="flex justify-center w-8 h-full absolute right-0 bg-black items-center  text-gray-300">
        <ion-icon
          style={{
            fontSize: "23px",
          }}
          name="heart-outline"
        ></ion-icon>
      </button>
    </div>
  );
}
