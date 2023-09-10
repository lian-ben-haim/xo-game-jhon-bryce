import { PayloadAction, createSlice } from "@reduxjs/toolkit";
//import TurnModel from "../Models/TurnModel";

function changeTurn(currentState: TurnModel, action: PayloadAction<TurnModel>) : TurnModel {
    const newState = currentState;

    
    return action.payload;
}

interface TurnModel {
	turn : boolean
}

const initialState: TurnModel = {
    turn: false,
}

const authSlice = createSlice({
    name: "turn",
    initialState,
    reducers: { changeTurn }
});

export const authActions = authSlice.actions;
