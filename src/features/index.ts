import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // pages: pagesReducer,
    // common: commonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
