/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCheckAvailabilityQuery, useCreateBookingMutation } from "@/redux/features/booking/bookingApi";
import { useGetSingleFacilityQuery } from "@/redux/features/facility/facilityApi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";



const Booking = () => {
    const { id } = useParams();

    const [ newDate, setNewDate ] = useState('');
    const [query, setQuery] = useState({ date: "", facility: "" });
    const [ startTime, setStartTime ] = useState('')
    const [ endTime, setEndTime ] = useState('')

    const { data, isLoading } = useGetSingleFacilityQuery(id);

    const { data: availableSlots } = useCheckAvailabilityQuery(query, { skip: !query.date });
    console.log(availableSlots);

    const [ createBooking ] = useCreateBookingMutation();

    const checkAvailableSlot = () => {
        setQuery({ date: newDate , facility: id as string });
    };

    const handleCreateOrder = async () => {
      toast.loading('Progress loading.. Please wait.');
        const data = {
            facility: id,
            date: newDate,
            startTime,
            endTime
        }
        const res = await createBooking(data)
        console.log(res);
        if(res?.data?.success){
            toast.success('Facility booked successfully.')
            window.location.href = res?.data?.data?.payment_url;
        }
    }

    const handleSlotClick = (slot: string) => {
      // If start time is empty, set the clicked slot as the start time
      if (!startTime) {
          setStartTime(slot);
      } 
      // If start time is set and end time is empty, set the clicked slot as the end time
      else if (!endTime) {
          setEndTime(slot);
      } 
      // If both start and end times are already set, reset them and start a new selection
      else {
          setStartTime(slot);
          setEndTime('');
      }
  };
    
    if (isLoading) {
        return <div className="flex justify-center align-middle items-center w-full h-screen">
            <p>Loading...</p>
        </div>
    }
  return (
    <div className="bg-gradient m-3 rounded-lg min-h-screen text-colorText">
       
         <div className="p-4">
      <div className="shadow-lg shadow-color-simple rounded-md ">
        <img src={data?.data?.image} alt={data?.data?.name} className="w-full h-64 object-cover object-center p-2" />
        <div className="p-4">
          <h2 className="text-2xl font-bold">{data?.data?.name}</h2>
          <p className="">{data?.data?.description}</p>
          <p className=" mt-2"><strong>Location:</strong> {data?.data?.location}</p>
          <p className=" mt-2"><strong>Price per Hour:</strong> ${data?.data?.pricePerHour}</p>
        </div>
      </div>

      <div className="mt-6 w-full">
        <div className="flex items-center space-x-4 justify-center">
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="w-4/12 p-2 border border-color-simple rounded-md"
          />
          <button
          disabled={!newDate}
            onClick={checkAvailableSlot}
            className="p-2 bg-colorBg text-white rounded-md"
          >
            Check Availability
          </button>
        </div>

        {/* Available Slots */}
        {availableSlots?.data?.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Available Slots</h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              {availableSlots?.data?.map((slot:any, index:number) => (
                <button
                key={index}
                onClick={() => handleSlotClick(slot.startTime)}
                className={`p-2 rounded-md text-center ${
                    slot.startTime === startTime || slot.startTime === endTime
                        ? 'bg-blue-500 text-white'
                        : 'bg-colorBg text-white'
                }`}
            >
                {slot.startTime}
            </button>
              ))}
            </div>
          </div>
        )}

        {/* Start Time and End Time Inputs */}
        <div className="mt-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block">Start Time</label>
              <input
                type=""
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md "
              />
            </div>
            <div className="flex-1">
              <label className="block">End Time</label>
              <input
                type=""
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md "
              />
            </div>
          </div>
          <button onClick={handleCreateOrder} className="mt-4 w-full p-2 bg-colorBg text-white rounded-md">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Booking