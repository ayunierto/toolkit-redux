import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'
import { todosApi } from './apis/todosApi'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    // Add the generated reducer as a specific top-level slice
    [todosApi.reducerPath]: todosApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: ( getDefaultMiddleware ) =>
    getDefaultMiddleware().concat( todosApi.middleware ),
})
