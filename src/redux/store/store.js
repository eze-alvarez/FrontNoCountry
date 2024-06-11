import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducers/campaignSlice";

const store = configureStore({
  reducer: {
    campaignInfo: rootReducer,
  },
});

export default store;
