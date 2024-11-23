import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistCombineReducers } from "redux-persist";
import userMultipleChoiceAnswer from "../reducer/userMultipleChoiceAnswerSlice";
import userTrueOrFalseAnswer from "../reducer/userTrueOrFalseAnswerSlice";
import user from "../reducer/userSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [""],
};

const persistedReducer = persistCombineReducers(persistConfig, {
  userMultipleChoiceAnswer,
  userTrueOrFalseAnswer,
  user,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
