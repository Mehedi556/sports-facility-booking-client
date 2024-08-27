import { Outlet } from "react-router-dom"


const DashboardLayout = () => {
  return (
    <div>
        <h1>Navbar</h1>
        <Outlet />
        <p>Footer</p>
    </div>
  )
}

export default DashboardLayout