import { data } from "@tensorflow/tfjs";

export default function reducer(
  state = {
    image: null,
    error: null,
    data: {
      timestamp: 1,
      num_poses: 0,
      img_w_h: null,
      poses: [],
    },
  },
  action
) {
  switch (action.type) {
    case "POSE_DATA": {
      return {
        ...state,
        data: { ...data, poses: action.payload },
      };
    }
  }

  return state;
}
