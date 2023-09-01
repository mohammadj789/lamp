import React from "react";

export const InventoryItem = (props) => {
  const selectedStyle = " rounded-md bg-gray-800 text-gray-100";
  const unselectedStyle =
    "transition-colors duration-300 transform rounded-md text-gray-200 hover:bg-gray-800 hover:text-gray-200";
  return (
    <a
      className={`flex items-center lg:justify-center px-4 py-2 ${
        props.selected ? selectedStyle : unselectedStyle
      }`}
      href="/#"
    >
      <img
        className={`w-12 h-12 object-cover flex-shrink-0 ${
          props?.type?.toLowerCase() === "artist"
            ? "rounded-full"
            : "rounded-md"
        }`}
        src={props.image ?? "/montain.jpg"}
        alt="inventory item"
      />
      <div className="mx-4 lg:hidden flex flex-col ">
        <p
          className={`whitespace-nowrap font-[500] ${
            props.isPlaying && " text-green-600"
          }`}
        >
          {props.title}
        </p>
        <p className="whitespace-nowrap text-sm text-gray-400">
          {props.type}
          {props.credit && ` . ${props.credit}`}
        </p>
      </div>
    </a>
  );
};
