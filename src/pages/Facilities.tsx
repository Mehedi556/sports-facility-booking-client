import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useGetAllFacilitiesQuery } from "@/redux/features/facility/facilityApi";
import { TFacility } from "@/types/facility.type";
import FacilityCard from "@/ui-components/FacilityCard";
import { useDebouncedValue } from "@/utils/debounceValue";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";


const Facilities = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [range, setRange] = useState([50])
    const sortData = ''
    const [page, setPage] = useState(1);
    const filter = {
        filterProperty: 'isDeleted',
        filterValue: 'false'
    };
    const limit = 6;

    const debouncedSearchTerm = useDebouncedValue(searchTerm, 2000);
    const debouncedFilter = useDebouncedValue(filter, 2000);

    const query = {
        searchTerm: debouncedSearchTerm,
        page,
        limit,
        filter: debouncedFilter,
        sortData
    }

    const { data, isLoading } = useGetAllFacilitiesQuery(query);
    let modifiedData:TFacility[] = data?.data?.result || [];

    const filteredData = modifiedData.filter((data:TFacility) => data?.pricePerHour <= range[0])

    modifiedData = filteredData

    const handleClickPreviousPage = () => {
        return page !== 1 ? setPage((prev) => prev - 1) : null
    };

    const handleClickNextPage = () => {
        return page !== data?.data?.meta?.totalPage ? setPage((prev) => prev + 1) : null;
    };

    if (isLoading) {
        return <div className="flex justify-center align-middle items-center w-full h-screen">
            <p>Loading...</p>
        </div>
    }
    return (
        <div>
            <h1 className="text-center font-bold text-xl sm:text-2xl mt-5">All Products</h1>
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center items-center lg:grid-cols-3 my-5 gap-5">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>

                    </div>
                    <input onChange={(e) => setSearchTerm(e.target.value)} type="text" id="search-navbar" className="block w-[300px] p-2 ps-10 text-sm text-gray-900 rounded-md bg-gray-50 focus:outline-none border border-color-primary" placeholder="Search by name or category" />
                </div>

                <div className="flex flex-row-reverse justify-center gap-y-3 items-center">
                    <p className="p-2  bg-gradient text-white rounded-full">{range[0]}</p>
                    <Slider
                    onValueChange={(value) => setRange(value)}
                        defaultValue={range}
                        max={100}
                        step={1}
                        className={cn("w-[300px]")}
                    />
                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1280px] justify-items-center mx-auto py-6 sm:py-10 px-3 lg:px-0">
                {
                    modifiedData?.map((item: TFacility, i: number) => (<FacilityCard key={i} item={item} />))
                }
            </div>
            <div className="flex col-span-3 justify-center pb-10">
                <button onClick={handleClickPreviousPage}>
                    <ArrowLeft size={16} className="text-color-primary" />
                </button>
                <p className="text-xs mx-2 font-semibold text-gray-600">
                    {page}/{data?.data?.meta?.totalPage}
                </p>
                <button onClick={handleClickNextPage}>
                    <ArrowRight size={16} className="text-color-primary" />
                </button>
            </div>
        </div>
    )
}

export default Facilities