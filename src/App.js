import { useEffect, useMemo, useRef, useState } from "react";
import { Player } from "./components/Player/Player";
import data from "./utils/dummydata.json";
import { Lyric } from "./components/Lyric/Lyric";
import { Header } from "./components/header/Header";
import { MobileNavBar } from "./components/header/MobileNavBar";
import { FloatingHeader } from "./components/header/FloatingHeader";
import { MobilePlayer } from "./components/Player/MobilePlayer";
import { MobileFullPlayer } from "./components/Player/MobileFullPlayer";

function App() {
  const [play, setPlay] = useState(null);
  const [curTime, setCurTime] = useState(0);
  const [playerIsShown, setPlayerIsShown] = useState(true);
  const [volume, setVolume] = useState({ current: 1, mute: false });
  const audio = useMemo(
    () => new Audio("Hiphopologist - DMT.mp3"),
    []
  );
  const audioProgress = useRef();
  const volumeProgress = useRef();

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

  const audioProgressClickHandlerr = (event) => {
    const { left } = audioProgress?.current?.getBoundingClientRect();
    const x = event.clientX - left;

    setCurTime(() => {
      const cur = Math.round(
        (x / audioProgress.current.clientWidth) * audio.duration
      );
      audio.currentTime = cur;
      return cur;
    });
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

  const volumeProgressClickHandlerr = (event) => {
    const { left } = volumeProgress?.current?.getBoundingClientRect();
    const x = event.clientX - left;
    setVolume((prev) => {
      return {
        mute: false,
        current: x / volumeProgress.current.clientWidth,
      };
    });
  };

  return (
    <div className="grid font-Poppins font-bold grid-cols-[16rem_1fr] lg:grid-cols-[5rem_1fr] h-screen min-h-screen  sm:h-[100dvh] sm:min-h-[100dvh] bg-black w-screen relative ">
      <Header />
      <div className="overflow-hidden relative rounded-md sm:col-span-full">
        <FloatingHeader />
        <Lyric
          data={data}
          curTime={curTime}
          setCurTime={setCurTime}
          changeHandler={changeByLyricHandler}
        />
      </div>
      <Player
        title="Creapin'"
        credit=" Metro Boomin, The Weekend Metro Boomin"
        image="/girl.jpg"
        //
        play={play}
        curTime={curTime}
        duration={audio.duration}
        audioProgress={audioProgress}
        setPlayHandler={setPlayHandler}
        setPauseHandler={setPauseHandler}
        audioProgressClickHandlerr={audioProgressClickHandlerr}
        //
        volumeProgressClickHandlerr={volumeProgressClickHandlerr}
        volumeProgress={volumeProgress}
        volume={volume}
        muteHaddler={toggleMuteHandller}
      />
      <MobileNavBar />
      <MobilePlayer
        openPlayer={setPlayershow}
        play={play}
        curTime={curTime}
        duration={audio.duration}
        audioProgress={audioProgress}
        setPlayHandler={setPlayHandler}
        setPauseHandler={setPauseHandler}
        audioProgressClickHandlerr={audioProgressClickHandlerr}
      />
      {playerIsShown && (
        <MobileFullPlayer
          hidehandller={setPlayerhide}
          play={play}
          curTime={curTime}
          audio={audio}
          audioProgress={audioProgress}
          setPlayHandler={setPlayHandler}
          setPauseHandler={setPauseHandler}
          audioProgressClickHandlerr={audioProgressClickHandlerr}
        />
      )}
    </div>
  );
}

export default App;
