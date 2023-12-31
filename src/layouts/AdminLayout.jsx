import { Outlet } from 'react-router-dom'
import AdminSideBar from "../components/AdminSideBar";

export default function AdminLayout() {
  return (
    <>
        <div className='md:flex '>
        <AdminSideBar/>
        <main className='flex-1 h-screen overflow-scroll bg-gray-100 p-3'>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

