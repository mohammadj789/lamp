import {createSlice} from "@reduxjs/toolkit";

export const PlayerSlice=createSlice({name:'Player',initialState:{duration:null,currentTime:null,soundVolume:1,mute:false},reducers:{
    toggleMute(state,action){
        state.mute=!state.mute
    },
    changeVolume(state,action){
        state.volume=action.payload
    },setDuration(state,action){
        state.duration=action.payload
        },
        changeCurrentTime(state,action){
        state.currentTime=action.payload
        }
    }})
export const PlayAction=PlayerSlice.actions