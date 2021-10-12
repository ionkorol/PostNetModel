import React, { Suspense } from "react";
import CameraView from "./components/CameraView";
import { Canvas } from "@react-three/fiber";
import Model from "./components/Three/model";
import Lights from "./components/Three/lights.js";
import { connect } from "react-redux";
import { RootState, useAppSelector } from "./store/store";
import { FormatedPoseProp } from "./utils/interface";
import CameraControls from "./components/Three/CameraControl";
import KalmanSmoothing from "./lib/KalmanSmoothing";

const App = (props: { poses: FormatedPoseProp[] }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        border: "1px solid black",
      }}
    >
      <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
        <CameraControls />
        <Lights />
        <Suspense fallback={null}>
          <Model poses={props.poses} />
        </Suspense>
      </Canvas>
      <CameraView />
    </div>
  );
};

const mapStateProps = (state: RootState) => ({
  poses: state.posenet.data.poses,
});

export default connect(mapStateProps)(App);
