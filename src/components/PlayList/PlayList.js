import React from "react";
import data from "../../utils/dummydata.json";
export default function PlayList() {
  return (
    <div className="overflow-auto h-full">
      <div className="w-full mb-4 pt-14 px-3 h-96 bg-gradient-to-b from-emerald-900 to-black flex gap-5 sm:flex-col ">
        <div className="xl:w-56 w-60 sm:w-full sm:h-3/5 overflow-hidden flex items-end sm:justify-center flex-shrink-0 sm:flex-shrink">
          <img
            className="w-full sm:h-full sm:w-auto rounded-md aspect-square object-cover"
            alt="playlist thumb nail"
            src={data.playlist.info.image}
          />
        </div>
        <div className="w-full sm:h-auto  flex  items-start justify-end jus flex-col text-white">
          <p>{data.playlist.info.type}</p>

          <h1 className="text-6xl sm:text-4xl shrink-0 line-clamp-2 mb-4 leading-[80px] sm:leading-[45px]">
            {data.playlist.info.title}
          </h1>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center shrink-0 gap-2">
              <img
                className="h-8 w-8 rounded-full"
                alt="maker profile"
                src={data.playlist.info.credit.img}
              />
              <a href="/#">{data.playlist.info.credit.name}</a>
            </span>
            <p className="shrink-0">
              {data.playlist.info.count} songs
            </p>
            <span className="shrink-0">
              {data.playlist.info.time.hour}hr{" "}
              {data.playlist.info.time.minutes}min
            </span>
          </div>
        </div>
      </div>
      <main className="w-full text-white px-3 flex flex-col gap-3 ">
        {data.playlist.songs.map((song, i) => (
          <div
            className="h-14 rounded-md px-3
          grid grid-cols-[auto_auto_1fr_1fr_.6fr_auto] gap-3 items-center hover:bg-white/30 transition-all group"
          >
            <span className="relative h-8 aspect-square flex items-center overflow-hidden">
              <span className="group-hover:hidden">{i + 1}</span>
              <span className="opacity-0 group-hover:opacity-100">
                <ion-icon style={{}} name="play"></ion-icon>
              </span>
            </span>
            <img
              className="h-10 w-10 object-cover"
              alt="playlist thumb nail"
              src={data.playlist.info.image}
            />

            <div className="group font-medium flex w-auto flex-col overflow-hidden ">
              <p className="font-[500] line-clamp-1">{song.title}</p>
              <p className="text-xs text-gray-400 line-clamp-1 ">
                {song.artist}
              </p>
            </div>

            <span className="line-clamp-1 overflow-hidden">
              {song.album}
            </span>
            <div></div>
            <span>{song.duration}</span>
          </div>
        ))}
      </main>
    </div>
  );
}
