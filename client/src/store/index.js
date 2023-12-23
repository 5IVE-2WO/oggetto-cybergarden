import { configureStore } from "@reduxjs/toolkit";
import lectorsReduser from "./lectors/lectorsSlice";

export default configureStore({
  reducer: {
    lectors: lectorsReduser,
  },
});
