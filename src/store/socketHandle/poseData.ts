import socket from "../../tools/poseData";
import { setPosenetData } from "../slices/posenetSlice";

export default {
  start(dispatch: any) {
    socket.on("fromServer", (msg: any) => {
      // console.log(msg)
      dispatch(setPosenetData(msg));
    });
  },
};
