import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import CharacterFormReducer from "./forms/CharacterForm.slice";

export const store = configureStore({
    reducer: {
        CharacterFormReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
