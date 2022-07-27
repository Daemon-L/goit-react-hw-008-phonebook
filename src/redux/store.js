import filterReducer from './contacts/reducer';
import { contactsApi } from './contacts/contactsApi';

import storage from 'redux-persist/lib/storage';
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';

import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './auth/authSliceNew';

const persistConfig = {
  key: 'root',
  version: 2,
  storage,
  whitelist: ['token']
}

const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistReducer(persistConfig, authReducer)
  },
  devTools: true,

  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  }).concat(contactsApi.middleware),
  
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;