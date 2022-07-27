import { createReducer } from "@reduxjs/toolkit";
import { filterContacts } from "./actions";

const initialState = {
    input: ''
};

const filterReducer = createReducer(
    initialState, builder => {
    builder.addCase(filterContacts, (state, action) => {
        state.input = action.payload;
    });
});

export default filterReducer;