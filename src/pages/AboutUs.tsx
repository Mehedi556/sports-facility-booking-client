/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import hero from "../assets/about-banner.jpg"
import { Boxes, Component, FolderGit2, Headset } from "lucide-react";
import Testimonials from "@/ui-components/Testimonials";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 font-sans mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-32 bg-gray-100">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-colorText">About Sports Club</h1>
        <p className="text-lg mb-6">
          Welcome to Sports Club, your one-stop platform for booking high-quality sports facilities at your convenience. We are committed to making facility bookings easier, faster, and more accessible for everyone.
        </p>
        <NavLink to={`/`} className="px-6 py-2 bg-gradient text-colorText font-semibold rounded-md transition">
          Explore
        </NavLink>
        </div>
        
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-12 max-w-[1280px] mx-auto">
        <StatItem number="2800+" label="Bookings Made" />
        <StatItem number="140+" label="Team Members" />
        <StatItem number="4" label="Global Offices" />
        <StatItem number="1000+" label="Satisfied Customers" />
      </section>

      {/* Team Image Section */}
      <section className="py-10">
        <img
          src={hero}
          alt="Our Team"
          className="w-full sm:h-[450px] md:h-[650px] lg:h-[750px] object-cover rounded-md shadow-lg"
        />
      </section>

      {/* Mission Statement Section */}
      <section className="text-center  py-16 md:py-32 bg-gradient">
        <div className="max-w-[1280px] mx-auto text-colorText">
          <h2 className="text-3xl font-semibold mb-4">
          Our Mission: Making Sports Accessible to Everyone
        </h2>
        <p className=" mb-6">
          At Sports Club, our mission is to empower sports enthusiasts and fitness lovers by providing an easy-to-use platform for booking sports facilities. Whether you're a casual player or a professional athlete, our goal is to make sports facilities more accessible, helping you focus on what you love—playing and staying active.
        </p>
        <button className="px-6 py-2 bg-colorBg text-white rounded-md ">
          Meet Our Team
        </button>
        </div>
        
      </section>

      {/* Unique Features Section */}
      <section className="py-16py-16 md:py-32">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 text-colorText">
          Why Choose Sports Club?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureColumn
            title="Seamless Booking Experience"
            description="Our platform offers a user-friendly interface, allowing you to book your preferred sports facility in just a few clicks."
          />
          <FeatureColumn
            title="Wide Range of Facilities"
            description="From indoor courts to outdoor fields, we offer a variety of facilities to suit every type of sport and activity."
          />
          <FeatureColumn
            title="Trusted by Thousands"
            description="With a strong reputation for reliability and quality, Sports Club is trusted by thousands of users around the world."
          />
          <FeatureColumn
            title="Comprehensive Support"
            description="Our team is here to support you every step of the way, ensuring a smooth and enjoyable booking experience."
          />
        </div>
        </div>
        
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-32 bg-gradient text-colorText">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center max-w-[1280px] mx-auto">
          <ProcessStep
            icon={<FolderGit2 size={40}/>}
            title="1. Project Initiation"
            description="We begin by gathering requirements and understanding your goals, ensuring we deliver the best possible service."
          />
          <ProcessStep
            icon={<Component size={40}/>}
            title="2. Design & Planning"
            description="Our designers craft visually appealing, user-friendly layouts to provide a top-notch user experience."
          />
          <ProcessStep
            icon={<Boxes size={40}/>}
            title="3. Development & Testing"
            description="Our developers bring the platform to life, building robust and efficient solutions tailored to your needs."
          />
          <ProcessStep
            icon={<Headset size={40}/>}
            title="4. Ongoing Support"
            description="We continue to support and optimize the platform, helping you make the most of our services."
          />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="text-center py-16 max-w-[1280px] mx-auto text-colorText">
        <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
        <p className=" mb-6">
          Our commitment to integrity, innovation, and customer satisfaction drives everything we do. We believe in creating value for our users by offering transparent services, continuously improving, and adapting to their needs.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="pb-16 bg-gray-100">
        {/* <h2 className="text-3xl font-semibold text-center mb-8">What Our Customers Say</h2>
        <p className="text-gray-600 text-center mb-6">
          Hear from sports enthusiasts who have benefited from using Sports Club to book their favorite facilities.
        </p> */}

        <Testimonials />
        {/* Add a slider component here for customer testimonials */}
      </section>
    </div>
  )
}

// Reusable components
const StatItem = ({ number, label }:{number:any, label:any}) => (
  <div className="p-6">
    <h2 className="text-4xl font-bold">{number}</h2>
    <p className="text-gray-600">{label}</p>
  </div>
);

const FeatureColumn = ({ title, description }:{title: any, description:any}) => (
  <div className="bg-gradient shadow-lg shadow-colorText p-6 rounded-lg text-center text-colorText">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="">{description}</p>
  </div>
);

const ProcessStep = ({ icon, title, description }:{icon:any, title:any, description:any}) => (
  <div className="bg-white shadow-lg shadow-colorText p-6 rounded-lg flex flex-col justify-center items-center">
    <div className="mb-4 text-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-colorText">{description}</p>
  </div>
);

export default AboutUs
