import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath : "userApi",
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:5000/',
    }),
    tagTypes : ["tasks"],
    endpoints  : (builder) =>({
      getUsers: builder.query({
        query : ()=> '/tasks',
        providesTags : ["tasks"],// esta es una etiqueta para llamar ha esta funciion cada vez que se necesite actualizar la visita
      }),
      creatProduct : builder.mutation({
        query : (newProduct)=>({
          url : "/tasks",
          method : "POST",
          body : (newProduct),
        }),
        invalidatesTags : ["tasks"], //aqui se llama 
      }),
      deleteProducts : builder.mutation({
        query : (id) =>({
          url : `/tasks/${id}`,
          method : "DELETE",
        }),
        invalidatesTags :["tasks"],
      }),
      uptateProducts : builder.mutation({
        query : (updateProduct)=>({
          url : `/tasks/${updateProduct.id}`,
          method : "PUT",
          body : updateProduct,
        })
      })
    })
})

export const {useGetUsersQuery , useCreatProductMutation , useDeleteProductsMutation , useUptateProductsMutation } = userApi;