import { baseApi } from "@/redux/api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacilities: builder.query({
      query: (queryData) => {
        const { page, limit, searchTerm, filter, sortData } = queryData;
        return {
          url:
            `/facility` +
            (page ? `?page=${page}` : "") +
            (limit ? `&limit=${limit}` : "") +
            (searchTerm ? `&searchTerm=${searchTerm}` : "") +
            (filter?.filterValue ? `&${filter?.filterProperty}=${filter?.filterValue}` : "") +
            (sortData ? `&sort=${sortData}` : ""),
          method: "GET",
        };
      },
      providesTags: ["facilities"],
    }),
    getSingleFacility: builder.query({
      query: (id) => {
        return {
          url: `/facility/${id}`,
          method: "GET",
        };
      },
    }),

    createFacility: builder.mutation({
        query: (data) => ({
            url: '/facility',
            method: 'POST',
            body: data
        }),
        invalidatesTags: ['facilities']
    }),

    updateFacility: builder.mutation({
        query: (data) => ({
            url: `/facility/${data?._id}`,
            method: 'PUT',
            body: data
        }),
        invalidatesTags: ['facilities']
    }),

    deleteFacility: builder.mutation({
        query: (_id) => ({
            url: `/facility/${_id}`,
            method: 'DELETE'
        }),
        invalidatesTags: ['facilities']
    }),

  }),
});

export const { 
    useGetAllFacilitiesQuery, 
    useGetSingleFacilityQuery, 
    useCreateFacilityMutation, 
    useUpdateFacilityMutation, 
    useDeleteFacilityMutation 
} = facilityApi;
