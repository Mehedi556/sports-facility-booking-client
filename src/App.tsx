import { NavLink } from "react-router-dom"


function App() {

  return (
    <div className="max-w-full">
      <nav className="bg-color-primary">
            <div className="max-w-[1020px] flex items-center justify-between mx-auto py-1 sm:py-3 px-3 lg:px-0">
                <NavLink to="/" className="flex items-center space-x-3">
                    {/* <img src={logo} className="h-14 w-14" alt="Nursery Logo" /> */}
                    <p>logo</p>
                    <span className="self-center text-xl sm:text-2xl font-bold whitespace-nowrap">Nursery Club</span>
                </NavLink>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
                        
                        <NavLink to="/" className="block py-2 px-3 text-black rounded md:hover:text-gray-600 md:p-0">Home</NavLink>
                        
                        <NavLink to="/products" className="block py-2 px-3 text-black rounded md:hover:text-gray-600 md:p-0">Products</NavLink>
                        
                        
                        <NavLink to="/manage-products" className="block py-2 px-3 text-black rounded md:hover:text-gray-600 md:p-0">Management</NavLink>
                        
                    </ul>
                </div>

                <div className="flex justify-center items-center md:order-2">
                    <NavLink to="/cart" className="ml-16 pt-2 hidden md:block">
                        <button className="">cart icon</button>
                    </NavLink>

                    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none" aria-controls="navbar-search" aria-expanded="false">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    {/* <Sidebar> */}
                        <button className="block md:hidden focus:outline-none">
                            {/* <Menu className="h-8 w-8"/> */}
                            sidebar icon
                        </button>
                    {/* </Sidebar> */}
                    
                </div>
            </div>
        </nav>

    </div>
  )
}

export default App
