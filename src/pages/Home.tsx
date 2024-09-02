import { useGetAllFacilitiesQuery } from "@/redux/features/facility/facilityApi"
import { TFacility } from "@/types/facility.type"
import FacilityCard from "@/ui-components/FacilityCard"
import Hero from "@/ui-components/Hero"
import Testimonials from "@/ui-components/Testimonials"
import HowItWorks from "@/ui-components/HowItWorks";
import WhyChoose from "@/ui-components/WhyChoose"

const Home = () => {
    const searchTerm = '';
    const page = 1;
    const filter = {
        filterProperty: '',
        filterValue: ''
    };
    const limit = 6;
    const sortData = "";

    const query = {
        searchTerm,
        page,
        limit,
        filter,
        sortData
    }
    const { data } = useGetAllFacilitiesQuery(query)
    return (
        <div className="max-w-full">
            <Hero />

            <h1 className="text-center font-bold text-xl pt-16">Latest Sport Facilities</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-5 max-w-[1024px] mx-auto pt-10 sm:pt-14 pb-6 px-3 lg:px-0">
                {
                    data?.data?.result?.map((item: TFacility) => (<FacilityCard key={item?._id} item={item} />))
                }
            </div>

            <HowItWorks /> 

            <Testimonials />

            <WhyChoose />


        </div>
    )
}

export default Home