import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/ProductsSlice";
import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
});

export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["categories", "user", "cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
