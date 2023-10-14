import React from "react";
import data from "../../utils/dummydata.json";
import PlayListItem from "./PlayListItem";
import { InfoHeader } from "./InfoHeader";

export default function PlayList() {
  return (
    <div className="overflow-auto h-full sm:pb-16">
      <InfoHeader
        type={"playList"}
        status={data.playlist.info.type}
        image={data.playlist.info.image}
        title={data.playlist.info.title}
        credit={data.playlist.info.credit}
        time={data.playlist.info.time}
        count={data.playlist.info.count}
        listener={100000}
      />
      <main className="w-full text-white px-3 flex flex-col gap-3 ">
        {data.playlist.songs.map((song, i) => (
          <PlayListItem
            image={data.playlist.info.image}
            song={song}
            index={i}
          />
        ))}
      </main>
    </div>
  );
}
