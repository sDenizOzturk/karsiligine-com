import "server-only";

import { getLatestCalculations } from "./utils/latest";

export const getLatest = () => {
  try {
    return getLatestCalculations();
  } catch (err) {
    // TODO Add custom error handler
    console.log(err);
  }
};
