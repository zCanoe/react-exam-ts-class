import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

const coutnerSlice = createSlice({
  name: "counter",
  initialState: () => ({
    count: 0,
  }),
  reducers: {
    changeCount(state, { payload }: PayloadAction<number>) {
      state.count = payload;
    },
  },
});

export const { changeCount } = coutnerSlice.actions;
export const countSelector = (state: RootState) => state.counter;
// export const {}
export default coutnerSlice.reducer;
