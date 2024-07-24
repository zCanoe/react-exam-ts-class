import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    subject_tree: [],
    active_two: {}
}

export const subjectSlice = createSlice({
    name: "subject",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder;
    }
})

export default subjectSlice.reducer;
