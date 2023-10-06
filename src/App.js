import { useEffect, useMemo, useRef, useState } from "react";
import { Player } from "./components/Player/Player";
import data from "./utils/dummydata.json";
import { Lyric } from "./components/Lyric/Lyric";
import { Header } from "./components/header/Header";
import { MobileNavBar } from "./components/header/MobileNavBar";
import { FloatingHeader } from "./components/header/FloatingHeader";
import { MobilePlayer } from "./components/Player/MobilePlayer";
import { MobileFullPlayer } from "./components/Player/MobileFullPlayer";
import { Transition } from "react-transition-group";
import PlayList from "./components/PlayList/PlayList";

function App() {
  const [play, setPlay] = useState(null);
  const [curTime, setCurTime] = useState(0);
  const [playerIsShown, setPlayerIsShown] = useState(false);
  const [volume, setVolume] = useState({ current: 1, mute: false });
  const [playList, setPlayList] = useState(false);
  const audio = useMemo(
    () => new Audio("Hiphopologist - DMT.mp3"),
    []
  );

  const setPlayHandler = () => {
    setPlay(true);
    audio.play();
  };

  const setPauseHandler = () => {
    setPlay(false);
    audio.pause();
  };
  const setPlayershow = () => {
    setPlayerIsShown(true);
  };

  const setPlayerhide = () => {
    setPlayerIsShown(false);
  };

  const changeByLyricHandler = (time) => (audio.currentTime = time);

  audio.addEventListener("timeupdate", (e) => {
    setCurTime(audio.currentTime);
  });

  audio.addEventListener("ended", () => {
    setPauseHandler();
  });

  const audioProgressClickHandlerr = (value) => {
    audio.currentTime = value;
    setCurTime(value);
  };

  useEffect(() => {
    if (volume.mute) {
      audio.volume = 0;
    } else audio.volume = volume.current;
  }, [volume, audio]);

  const toggleMuteHandller = () => {
    setVolume((prev) => {
      return {
        ...prev,
        mute: !prev.mute,
      };
    });
  };

  const volumeProgressClickHandlerr = (value) => {
    setVolume({
      mute: false,
      current: value / 100,
    });
  };

  return (
    <div className="grid box-border font-Poppins font-bold grid-cols-[16rem_1fr] lg:grid-cols-[5rem_1fr] h-screen min-h-screen  sm:h-[100dvh] sm:min-h-[100dvh] bg-black w-screen relative ">
      <Header />
      <div className="overflow-hidden relative sm:h-[calc(100vh-70px)]  rounded-md sm:col-span-full">
        <FloatingHeader setPlayList={setPlayList} />

        {playList ? (
          <PlayList />
        ) : (
          <Lyric
            data={data.lyric}
            curTime={curTime}
            setCurTime={setCurTime}
            changeHandler={changeByLyricHandler}
          />
        )}
      </div>
      <Player
        title="Creapin'"
        credit=" Metro Boomin, The Weekend Metro Boomin"
        image="/girl.jpg"
        //
        play={play}
        curTime={curTime}
        duration={audio.duration}
        setPlayHandler={setPlayHandler}
        setPauseHandler={setPauseHandler}
        audioProgressClickHandlerr={audioProgressClickHandlerr}
        //
        volumeProgressClickHandlerr={volumeProgressClickHandlerr}
        volume={volume}
        muteHaddler={toggleMuteHandller}
      />
      <MobileNavBar />
      <MobilePlayer
        openPlayer={setPlayershow}
        play={play}
        curTime={curTime}
        duration={audio.duration}
        setPlayHandler={setPlayHandler}
        setPauseHandler={setPauseHandler}
        audioProgressClickHandlerr={audioProgressClickHandlerr}
      />
      <Transition
        mountOnEnter
        unmountOnExit
        in={playerIsShown}
        timeout={150}
      >
        {(state) => (
          <MobileFullPlayer
            classes={` ${
              (state === "entered" || state === "entering") &&
              "!translate-y-[0]"
            }`}
            hidehandller={setPlayerhide}
            play={play}
            curTime={curTime}
            audio={audio}
            setPlayHandler={setPlayHandler}
            setPauseHandler={setPauseHandler}
            audioProgressClickHandlerr={audioProgressClickHandlerr}
          />
        )}
      </Transition>
    </div>
  );
}

export default App;
