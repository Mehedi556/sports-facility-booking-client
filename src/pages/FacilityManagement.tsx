/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { TFacility } from "@/types/facility.type";
import { ArrowLeft, ArrowRight, Edit, Settings, Trash2 } from "lucide-react";
import { useState } from "react";
import { useGetAllFacilitiesQuery } from "@/redux/features/facility/facilityApi";
// import CreateFacilityModal from "@/ui-components/modals/admin/facility/CreateFacilityModal";
import UpdateFacilityModal from "@/ui-components/modals/admin/facility/UpdateFacilityModal";
import DeleteFacilityModal from "@/ui-components/modals/admin/facility/DeleteFacilityModal";
import { NavLink } from "react-router-dom";

const FacilityManagement = () => {
  const [page, setPage] = useState(1)
  const filter = {
    filterProperty: 'isDeleted',
    filterValue: 'false'
  };

  const limit = 6;
  const queryData = {
    page,
    limit,
    filter
  }
  const { data, isLoading } = useGetAllFacilitiesQuery(queryData);

  const handleClickPreviousPage = () => {
    return page !== 1 ? setPage((prev: number) => prev - 1) : null;
  };


  const handleClickNextPage = () => {
    return page !== data?.data?.meta?.totalPage ? setPage((prev: number) => prev + 1) : null;
  };

  if (isLoading) {
    return <div className="flex justify-center align-middle items-center w-full h-screen">
      <p>Loading...</p>
    </div>
  }
  return (
    <div>
      <div className="px-3 min-h-screen m-3 rounded-lg text-colorText bg-gradient">
        <div className="flex justify-between py-3 sm:py-5">
          <h1 className="text-xl sm:text-2xl font-bold">Manage Facilities</h1>
          {/* <CreateFacilityModal> */}
            <NavLink to='/admin/create-facility' className="font-bold bg-colorBg text-white hover:bg-colorHover text-sm sm:text-base py-1.5 sm:py-3 px-3 sm:px-5 rounded-sm">
              Create Facility
            </NavLink>
          {/* </CreateFacilityModal> */}
        </div>
        <Table className="">
          <TableCaption className="text-colorText">Recent added facilities.</TableCaption>
          <TableHeader className="text-xs sm:text-base">
            <TableRow>
              <TableHead className="text-left p-0 font-bold text-colorText">Plant</TableHead>
              <TableHead className=" p-0 pl-1 sm:pl-3 font-bold text-colorText">Title</TableHead>
              <TableHead className=" p-0 font-bold text-colorText">Location</TableHead>
              <TableHead className=" p-0 font-bold text-colorText">Price</TableHead>
              <TableHead className="p-0 text-right font-bold text-colorText">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs sm:text-base">
            {
              data?.data?.result.map((item: TFacility) => (
                <TableRow className="mb-6" key={item?._id}>
                  <TableCell className="font-medium p-0 h-14 sm:h-24 w-14 sm:w-24">
                    <img className="h-14 sm:h-24 w-14 sm:w-24 object-cover object-center" src={item?.image} alt="" />
                  </TableCell>
                  <TableCell className="p-0 pl-1 sm:pl-3 text-colorBg font-semibold">{item?.name}</TableCell>
                  <TableCell className="p-0 text-colorBg font-semibold">{item?.location.substring(0, 15)}{item?.location.length > 15 && '....'}</TableCell>
                  <TableCell className="p-0 text-colorBg font-semibold">${item?.pricePerHour} per hour</TableCell>
                  <TableCell className="">
                    <div className="flex justify-end">
                      <Popover>
                        <PopoverTrigger>
                          <Settings className="cursor-pointer text-colorText h-4 sm:h-6 w-4 sm:w-6" />
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px]">
                          <h1 className="font-bold text-colorText text-sm border-b pb-2">
                            Actions
                          </h1>
                          <div className="mt-2">
                            <UpdateFacilityModal data={item}>
                              <button className="text-colorText flex items-center space-x-2 p-2 text-sm hover:bg-gray-100 w-full rounded">
                                <Edit size={16} />
                                <p>Update</p>
                              </button>
                            </UpdateFacilityModal>

                            <DeleteFacilityModal _id={item?._id as string}>
                              <button className="text-colorText flex items-center space-x-2 p-2 text-sm hover:bg-gray-100 w-full rounded">
                                <Trash2 className="text-red-600" size={16} />
                                <p className="text-colorText">Delete</p>
                              </button>
                            </DeleteFacilityModal>

                          </div>
                        </PopoverContent>
                      </Popover>

                    </div>
                  </TableCell>
                </TableRow>
              ))
            }

          </TableBody>
        </Table>

        <div className="flex col-span-3 justify-center sm:justify-end py-3">
          <button onClick={handleClickPreviousPage}>
            <ArrowLeft size={16} className="text-colorText" />
          </button>
          <p className="text-xs mx-2 font-semibold text-colorText">
            {page}/{data?.data?.meta?.totalPage}
          </p>
          <button onClick={handleClickNextPage}>
            <ArrowRight size={16} className="text-colorText" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default FacilityManagement