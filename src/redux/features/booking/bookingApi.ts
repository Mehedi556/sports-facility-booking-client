import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookingsForUser: builder.query({
      query: () => {
        return {
          url: `/bookings/user`,
          method: "GET",
        };
      },
      providesTags: ["bookings"],
    }),

    getAllBookingsForAdmin: builder.query({
      query: () => {
        return {
          url: `/bookings`,
          method: "GET",
        };
      }
    }),

    cancelBooking: builder.mutation({
      query: (data) => ({
       url: `/bookings/${data?._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bookings"],
    }),


    checkAvailability: builder.query({
      query: (query) => ({
          url: `/check-availability?date=${query?.date}&facility=${query?.facility}`,
          method: "GET",
      }),
      providesTags: ["availableSlot"],
    }),

    createBooking: builder.mutation({
      query: (data) => ({
       url: `/bookings`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["availableSlot"],
    }),
  }),
});

export const { useGetAllBookingsForUserQuery, useCancelBookingMutation, useGetAllBookingsForAdminQuery, useCheckAvailabilityQuery, useCreateBookingMutation } = bookingApi;
