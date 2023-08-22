import { configureStore } from "@reduxjs/toolkit";
import { CryptoAPI } from "../Services/CryptoAPI";
import { newsAPI } from "../Services/NewsAPI";

export default configureStore({
  reducer: {
    [CryptoAPI.reducerPath]: CryptoAPI.reducer,
    [newsAPI.reducerPath]: newsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CryptoAPI.middleware, newsAPI.middleware),
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(newsAPI.middleware),
});
