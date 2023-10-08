import React, { useState } from "react";
import PlayListItem from "../PlayList/PlayListItem";
import data from "../../utils/dummydata.json";

export function ProfileTopSong(props) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="w-full text-white px-3">
      <h2 className="font-bold text-2xl text-white mb-2">
        {props.title}
      </h2>
      <div className=" flex flex-col gap-1">
        {data.playlist.songs.map((song, i) => {
          if (showMore ? i < 10 : i < 5)
            return (
              <PlayListItem
                image={data.playlist.info.image}
                song={song}
                index={i}
                stream={"463,785,664"}
              />
            );
        })}
      </div>
      <button
        className="text-xs text-gray-300"
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
