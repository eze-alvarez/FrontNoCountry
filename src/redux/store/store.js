import { configureStore } from "@reduxjs/toolkit";

import campaignReducer from "../reducers/campaignSlice";

const store = configureStore({
  reducer: {
    campaignInfo: campaignReducer,
  }
});

export default store;