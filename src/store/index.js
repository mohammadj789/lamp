import { configureStore } from "@reduxjs/toolkit";
import { PlayerSlice } from "./PlayerSlice";
import { SongSlice } from "./SongSlice";

const store = configureStore({
  reducer: {
    Player: PlayerSlice.reducer,
    Song: SongSlice.reducer,
    devTools: process.env.NODE_ENV !== "production",
  },
});
export default store;
