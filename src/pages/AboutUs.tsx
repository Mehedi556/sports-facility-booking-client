
const AboutUs = () => {
  return (
    <div className="max-w-full bg-gray-100">
      <div className="flex flex-col gap-y-5 sm:gap-y-10 py-12 max-w-[1024px] mx-auto">

      <section className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-color-primary">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At our Sports Club, we aim to provide an environment where individuals of all ages can enjoy physical activity, develop skills, and foster a sense of community. <br /> <br /> We are committed to promoting healthy lifestyles, encouraging teamwork, and offering high-quality facilities to ensure that every member reaches their full potential. Through dedication, innovation, and a passion for sports, we strive to be a leader in creating a vibrant and inclusive sports culture.
        </p>
      </section>


      <section className="mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center text-color-primary">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-5">

          <div className="bg-white rounded-lg shadow-lg shadow-color-simple p-6 max-w-xs">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREB7FC1k3nxOMlqRHPWG-j6mXUcysRIgm1GA&s" className=" object-cover object-center w-48 h-48 rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg shadow-color-simple p-6 max-w-xs">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0rfm7ulLh-hULWlR8NBtrIwRCCWql8VQ9zw&s" className=" object-cover object-center w-48 h-48 rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg shadow-color-simple p-6 max-w-xs ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoEq5Rlm_kNtyFHeRiBRdPJRfPtfLaD70wIZU2UaJTOx8UFWGWQXwhgAvJYhiIiPevW4&usqp=CAU" className=" object-cover object-center w-48 h-48 rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Alice Brown</h3>
            <p className="text-gray-600">COO</p>
          </div>
        </div>
      </section>


      <section className="mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center text-color-primary">Our Journey</h2>
        <div className="max-w-4xl mx-auto">
          <div className="timeline-content">
            <p className="text-gray-600 text-center p-1">For over a decade, our Sports Club has been at the heart of fostering athletic excellence and community spirit. What began as a small initiative has grown into a thriving hub for sports enthusiasts of all ages. We've expanded our facilities, introduced diverse programs, and cultivated a community that values health, teamwork, and sportsmanship. <br /> <br />

              From local competitions to regional tournaments, our journey has been one of continuous growth and achievement. Today, we stand proud as a leading sports club, dedicated to empowering athletes, nurturing talent, and creating lasting memories on and off the field.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-color-primary">Contact Us</h2>
        <p className="text-lg text-gray-700">Feel free to reach out to us at:</p>
        <p className="text-gray-700 mt-2 text-sm">134, Haque Heritage, Banani, Dhaka, Bangladesh</p>
        <p className="text-gray-700 mt-2 text-sm">Phone: +880 234 567 890</p>
        <p className="text-gray-700 mt-2 text-sm">Email: support@sportsclub.com</p>
      </section>
    </div>
    </div>
    
  )
}

export default AboutUs