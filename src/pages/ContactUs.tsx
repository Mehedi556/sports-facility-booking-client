const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full shadow-colorText">
        {/* Contact Information Section */}
        <div className="bg-gradient text-colorText p-8 md:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-4">
              <p className="flex items-center space-x-2">
                <span>📍</span>
                <span>23, Haque Heritage<br />Dhaka, Bangladesh</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>📧</span>
                <span>salam.mehedi99@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>👤</span>
                <span>Abdus Salam Mehedi</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>📞</span>
                <span>880+ 1791097139</span>
              </p>
            </div>
          </div>
          <div className="flex space-x-4 mt-8">
            {/* Social Media Icons */}
            <a href="#" className="text-white hover:text-gray-300">🐦</a>
            <a href="#" className="text-white hover:text-gray-300">📸</a>
            <a href="#" className="text-white hover:text-gray-300">💼</a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="p-8 md:w-2/3 w-full text-colorText">
          <h2 className="text-2xl font-semibold  mb-4">Get in Touch</h2>
          <p className=" mb-6">Feel free to drop us a line below!</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border-colorText"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border-colorText"
            />
            <textarea
              placeholder="Type your message here..."
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border-colorText"
            />
            <button className="w-full bg-gradient text-colorText py-3 rounded-md font-semibold  transition duration-300">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs