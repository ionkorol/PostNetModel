import socket from "../../tools/poseData";

export default {
    start(dispatch) {
        socket.on('fromServer', (msg) => {
            // console.log(msg)
            dispatch(({ type: "POSE_DATA", payload: msg}));
        });   
    },
};