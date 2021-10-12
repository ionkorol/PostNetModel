import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as posenet from "@tensorflow-models/posenet";
import * as tfjs from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import {
  FormatedKeypointsTypes,
  FormatedPoseProp,
  RawKeypointsTypes,
} from "../../utils/interface";
import { useAppDispatch } from "../../store/store";
import { setPosenetData } from "../../store/slices/posenetSlice";

const CameraView = () => {
  const webcamRef = useRef<Webcam>(null);

  const dispatch = useAppDispatch();

  const runPosenet = async () => {
    tfjs.getBackend();
    const net = await posenet.load();
    console.log("Posenet loaded");
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net: posenet.PoseNet) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current!.video!.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = video!.videoWidth;
      const videoHeight = video!.videoHeight;

      webcamRef.current!.video!.width = videoWidth;
      webcamRef.current!.video!.height = videoHeight;

      const poses = await net.estimateMultiplePoses(video!);

      dispatch(setPosenetData(normalizePoseData(poses)));
    }
  };

  useLayoutEffect(() => {
    runPosenet();
  }, []);

  const normalizePoseData = (posesData: posenet.Pose[]) => {
    let formatedPoses: FormatedPoseProp[] = [];

    for (const pose of posesData) {
      let formatedPose = {
        SCORE: pose.score,
      };

      for (const keypoint of pose.keypoints) {
        formatedPose = {
          ...formatedPose,
          [KEYPOINTS_DICT[keypoint.part]]: {
            ...keypoint.position,
            score: keypoint.score,
            ray: null,
          },
        };
      }
      formatedPoses = [...formatedPoses, formatedPose as any];
    }
    return formatedPoses;
  };

  return (
    <Webcam
      ref={webcamRef}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 320,
        height: 240,
        zIndex: 9,
      }}
    />
  );
};

export default CameraView;

const KEYPOINTS_DICT: { [key: string]: FormatedKeypointsTypes } = {
  nose: "NOSE",
  leftEye: "LEFT_EYE",
  rightEye: "RIGHT_EYE",
  leftEar: "LEFT_EAR",
  rightEar: "RIGHT_EAR",
  leftShoulder: "LEFT_SHOULDER",
  rightShoulder: "RIGHT_SHOULDER",
  leftElbow: "LEFT_ELBOW",
  rightElbow: "RIGHT_ELBOW",
  leftWrist: "LEFT_WRIST",
  rightWrist: "RIGHT_WRIST",
  leftHip: "LEFT_HIP",
  rightHip: "RIGHT_HIP",
  leftKnee: "LEFT_KNEE",
  rightKnee: "RIGHT_KNEE",
  leftAnkle: "LEFT_ANKLE",
  rightAnkle: "RIGHT_ANKLE",
};
