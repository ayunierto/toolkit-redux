// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Definir un servicio usando una URL base y puntos finales esperados
export const todosApi = createApi({

  reducerPath: 'todos',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),

  endpoints: ( builder ) => ({

    getTodos: builder.query({
      query: () => `/todos`,
    }),

    getTodo: builder.query({
        query: ( todoId ) => `/todos/${ todoId }`,
      }),
  }),
})

// Exportar ganchos para uso en componentes funcionales, que son
// generado automáticamente en función de los puntos finales definidos
export const { useGetTodosQuery, useGetTodoQuery } = todosApi