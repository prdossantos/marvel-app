import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { setStorageItem } from "../helper";

export const CharacterFormAdapter = createEntityAdapter();

export const CharacterFormSlice = createSlice({
    name: "CharacterFormReducer",
    initialState: {
        data: {},
        status: "idle"
    },
    reducers: {
        update( state, action ) {
            state.status = "pending"
            state.data = action.payload
            setStorageItem(`form-character-data-${action.payload.id}`, action.payload)
            state.status = "done"
        },
        setStatus( state, action ) {
            state.status = action.payload
        }
    },
    extraReducers: {}
})

export default CharacterFormSlice.reducer
