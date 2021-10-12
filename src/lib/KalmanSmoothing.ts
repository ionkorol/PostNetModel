import { FormatedKeypointsTypes, FormatedPartProp, FormatedPoseProp } from "../utils/interface";
const { KalmanFilter } = require("kalman-filter");

import testData from "./test.json";

const KalmanSmoothing = (currentPositions: FormatedPoseProp[]) => {
  const kFilter = new KalmanFilter({ observation: 2 });
  let formatedPositionsData: any = {};

  for (const position of currentPositions) {
    for (const [key, part] of Object.entries(position)) {
      if (key !== "SCORE") {
        const partData = part as FormatedPartProp;
        formatedPositionsData = {
          ...formatedPositionsData,
          [key]: formatedPositionsData[key]
            ? [...formatedPositionsData[key], [partData.x, partData.y]]
            : [[partData.x, partData.y]],
        };
      }
    }
  }

  let kData: any = {};
  for (const [key, value] of Object.entries(formatedPositionsData)) {
    const best = kFilter.filterAll(value);
    kData = {
      ...kData,
      [key]: {
        x: best[best.length - 1][0],
        y: best[best.length - 1][1],
        score: currentPositions[currentPositions.length - 1][key as FormatedKeypointsTypes].score,
      },
    };
  }
  return kData;
};

export default KalmanSmoothing;
