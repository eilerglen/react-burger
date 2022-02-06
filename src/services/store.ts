import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./index";
import socketMiddleware from "./web-socket/middleware/socket-middleware";
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware()),
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch