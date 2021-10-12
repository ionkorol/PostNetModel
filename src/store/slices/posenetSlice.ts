import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormatedPoseProp } from "../../utils/interface";

const initialState: {
  image: null;
  error: null;
  data: {
    timestamp: 1;
    num_poses: 0;
    img_w_h: null;
    poses: FormatedPoseProp[];
  };
} = {
  image: null,
  error: null,
  data: {
    timestamp: 1,
    num_poses: 0,
    img_w_h: null,
    poses: [],
  },
};

const posenetSlice = createSlice({
  name: "postnet",
  initialState,
  reducers: {
    setPostnetData: (state, { payload }: PayloadAction<FormatedPoseProp[]>) => {
      state.data.poses = payload;
    },
  },
});

export default posenetSlice.reducer;
export const { setPostnetData } = posenetSlice.actions;
