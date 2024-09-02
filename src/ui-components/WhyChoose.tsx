import available from '../assets/icons/available.gif'
import booking from '../assets/icons/booking.gif'
import customer from '../assets/icons/customer.gif'
import interfaceIcon from '../assets/icons/interface.gif'
import payment from '../assets/icons/payment.gif'
import privacy from '../assets/icons/privacy.gif'


const sections = [
    {
        title: 'Real-Time Availability',
        icon: available,
        description: 'Stay updated with real-time facility availability, so you can book with confidence and avoid double bookings.'
    },
    {
        title: 'Customizable Booking Options',
        icon: booking,
        description: 'Tailor your bookings to your needs, whether its a one-time event or a recurring reservation, with flexible options.'
    },
    {
        title: 'Customer Support',
        icon: customer,
        description: 'Our 24/7 customer support team is here to help with any booking issues, payment concerns, or general inquiries.'
    },
    {
        title: 'User-Friendly Interface',
        icon: interfaceIcon,
        description: 'Our platform is easy to navigate, making booking facilities simple and stress-free, even for first-time users.'
    },
    {
        title: 'Secure Payments',
        icon: payment,
        description: 'We ensure your financial information is protected with SSL-compliant gateways and trusted payment processors.'
    },
    {
        title: 'Comprehensive Privacy Policy',
        icon: privacy,
        description: 'Your personal data is safe with us, protected under a strict privacy policy that guarantees confidentiality.'
    },
]


const WhyChoose = () => {
    return (
        <div className='max-w-full'>
            <h1 className="text-center font-bold text-xl pt-16">Why Choose Our Platform?</h1>

            <div className="max-w-[1024px] mx-2 sm:mx-2 lg:mx-auto pt-10 sm:pt-14 pb-6">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-5'>
                    {sections.map((section, index) => (
                        <div key={index} className='p-3 rounded-md shadow-md shadow-color-simple border border-color-simple'>
                            <h1 className='text-center font-semibold text-sm sm:text-lg'>{section.title}</h1>
                            <div className='flex flex-col items-center gap-5 mt-2'>
                                <img src={section?.icon} className='w-20 h-20 ' />

                                <p className='text-xs sm:text-sm text-center mt-[-10px] text-zinc-500'>{section?.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyChoose