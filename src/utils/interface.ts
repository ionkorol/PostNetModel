export interface FormatedPoseProp {
  SCORE: number;
  NOSE: FormatedPartProp;
  LEFT_EYE: FormatedPartProp;
  RIGHT_EYE: FormatedPartProp;
  LEFT_EAR: FormatedPartProp;
  RIGHT_EAR: FormatedPartProp;
  LEFT_SHOULDER: FormatedPartProp;
  RIGHT_SHOULDER: FormatedPartProp;
  LEFT_ELBOW: FormatedPartProp;
  RIGHT_ELBOW: FormatedPartProp;
  LEFT_WRIST: FormatedPartProp;
  RIGHT_WRIST: FormatedPartProp;
  LEFT_HIP: FormatedPartProp;
  RIGHT_HIP: FormatedPartProp;
  LEFT_KNEE: FormatedPartProp;
  RIGHT_KNEE: FormatedPartProp;
  LEFT_ANKLE: FormatedPartProp;
  RIGHT_ANKLE: FormatedPartProp;
}

export interface FormatedPartProp {
  x: number;
  y: number;
  score: number;
  ray: null;
}

export type RawKeypointsTypes =
  | "nose"
  | "leftEye"
  | "rightEye"
  | "leftEar"
  | "rightEar"
  | "leftShoulder"
  | "rightShoulder"
  | "leftElbow"
  | "rightElbow"
  | "leftWrist"
  | "rightWrist"
  | "leftHip"
  | "rightHip"
  | "leftKnee"
  | "rightKnee"
  | "leftAnkle"
  | "rightAnkle";

export type FormatedKeypointsTypes =
  | "NOSE"
  | "LEFT_EYE"
  | "RIGHT_EYE"
  | "LEFT_EAR"
  | "RIGHT_EAR"
  | "LEFT_SHOULDER"
  | "RIGHT_SHOULDER"
  | "LEFT_ELBOW"
  | "RIGHT_ELBOW"
  | "LEFT_WRIST"
  | "RIGHT_WRIST"
  | "LEFT_HIP"
  | "RIGHT_HIP"
  | "LEFT_KNEE"
  | "RIGHT_KNEE"
  | "LEFT_ANKLE"
  | "RIGHT_ANKLE";
