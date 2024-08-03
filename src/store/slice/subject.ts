import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { AxiosRes } from "@/util/http";
import { RootState } from "@/store";
import axios from "axios";

interface Subject {
    subject_tree: any [],
    active_two: object
}

const initialState: Subject = {
    subject_tree: [],
    active_two: {}
}

export const get_subject_tree_sync = createAsyncThunk(
    'get/subject_tree',
    async (action, state) => {
        const res:AxiosRes = await axios.get("/api/subject")
        return res.data.data
    }
)

export const subjectSlice = createSlice({
    name: "subject",
    initialState,
    reducers: {
        set_subject_active_two(state, action: PayloadAction<object>){
            console.log(action)
            state.active_two = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(get_subject_tree_sync.fulfilled, (state, res: PayloadAction<any []>) => {
            state.subject_tree = res.payload;
        })
    }
})

export const subject_tree_select = (state: RootState) => state.subject.subject_tree;
export const subject_active_two_select = (state: RootState) => state.subject.active_two;
export const set_subject_active_two = subjectSlice.actions.set_subject_active_two;
export default subjectSlice.reducer;
