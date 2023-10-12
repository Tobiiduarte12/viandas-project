import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const reducers = combineReducers({});

export const persistConfig = {
	key: "root",
	storage,
	whileList: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const Store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(Store);
