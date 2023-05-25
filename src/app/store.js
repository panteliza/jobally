import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { CandidateProfileApi } from '../services/candidateProfileApi'

export const store = configureStore({
  reducer: {
    
    [CandidateProfileApi.reducerPath]: CandidateProfileApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CandidateProfileApi.middleware),
})


setupListeners(store.dispatch)