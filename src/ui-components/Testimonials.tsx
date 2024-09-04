import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from "../assets/hero.jpg"
import review1 from "../assets/review1.png"
import review2 from "../assets/review2.png"
import review3 from "../assets/review3.png"
// import banner3 from "../assets/banner3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div>
            <h1 className="text-center font-semibold sm:font-bold text-xl sm:text-3xl pt-16 lg:pt-28">Our Customer Reviews</h1>
            <div className="max-w-[1280px] mx-2 sm:mx-2 lg:mx-auto pt-10 sm:pt-14 pb-6 px-3 lg:px-0">
                <div className='h-[40%] mt-3 p-0 bg-gradient rounded-md shadow-xl shadow-color-simple'>
                    <Swiper
                        spaceBetween={30}
                        // effect='fade'
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[EffectFade, Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='relative'>
                            <div className='bg-slate-700'>
                                <div className='opacity-30 '>
                                    <img className="object-cover object-center h-[200px] sm:h-[300px] md:h-[500px] w-[100%]" src="https://i.ibb.co/G7Yz75Q/tabletennis.jpg" alt="" />
                                </div>
                                <div className='absolute top-3 sm:top-8 md:top-16 lg:top-14 left-auto right-auto opacity-100'>
                                    <img className='h-16 w-16 sm:h-24 md:h-32 lg:h-36 sm:w-24 md:w-32 lg:w-36 mx-auto rounded-full object-cover object-center' src={review1} alt="" />
                                    <h1 className='text-slate-200 mt-0 sm:mt-3 md:mt-10 px-10 text-xs sm:text-lg md:text-xl lg:text-2xl'>Booking a facility through this platform was a breeze! The process was straightforward, and I appreciated the real-time availability feature. Highly recommended!</h1>
                                    <p className='mt-5 md:mt-16 text-sm sm:text-base text-white font-semibold'>John Doe</p>
                                    <p className='text-xs sm:text-sm md:text-base text-white'>Amateur Tennis Player</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <div className='bg-slate-700'>
                                <div className='opacity-30 '>
                                    <img className="object-cover object-center h-[200px] sm:h-[300px] md:h-[500px] w-[100%]" src="https://i.ibb.co/RgWsQXt/football.webp" alt="" />
                                </div>
                                <div className='absolute top-3 sm:top-8 md:top-16 lg:top-14 left-auto right-auto opacity-100'>
                                    <img className='h-16 w-16 sm:h-24 md:h-32 lg:h-36 sm:w-24 md:w-32 lg:w-36 mx-auto rounded-full object-cover object-center' src={review2} alt="" />
                                    <h1 className='text-slate-200 mt-0 sm:mt-3 md:mt-10 px-10 text-xs sm:text-lg md:text-xl lg:text-2xl'>The best platform I've used for booking sports facilities. It's user-friendly, and the customer service is excellent. I never had any issues finding the perfect spot for our matches.</h1>
                                    <p className='mt-5 md:mt-16 text-sm sm:text-base text-white font-semibold'>Sarah Lee</p>
                                    <p className='text-xs sm:text-sm md:text-base text-white'>Recreational Volleyball Team Captain</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <div className='bg-slate-700'>
                                <div className='opacity-30 '>
                                    <img className="object-cover object-center h-[200px] sm:h-[300px] md:h-[500px] w-[100%]" src={banner1} alt="" />
                                </div>
                                <div className='absolute top-3 sm:top-8 md:top-16 lg:top-14 left-auto right-auto opacity-100'>
                                    <img className='h-16 w-16 sm:h-24 md:h-32 lg:h-36 sm:w-24 md:w-32 lg:w-36 mx-auto rounded-full object-cover object-center' src={review3} alt="" />
                                    <h1 className='text-slate-200 mt-0 sm:mt-3 md:mt-10 px-10 text-xs sm:text-lg md:text-xl lg:text-2xl'>The variety of facilities available is impressive. I was able to book a football field in just a few clicks, and the experience was seamless from start to finish.</h1>
                                    <p className='mt-5 md:mt-16 text-sm sm:text-base text-white font-semibold'>Michael Smith</p>
                                    <p className='text-xs sm:text-sm md:text-base text-white'>Weekend Football Enthusiast</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonials