import {createSlice} from "@reduxjs/toolkit";

export const SongSlice=createSlice({name:'Song',initialState: {cover:null,title:null,artist:null},
    reducers:
        {
            fetchSong(state,action){
                state.cover = action?.payload?.cover
                state.title = action?.payload?.title
                state.artist = action?.payload?.artist
            }
        }})
export const SongAction=SongSlice.actions