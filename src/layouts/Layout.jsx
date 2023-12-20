import { Outlet} from 'react-router-dom'
import Siderbar from '../components/Siderbar'
import Resumen from '../components/Resumen'



export default function Layout() {
  return (
    <div className='md:flex '>
      <Siderbar/>
      <main className='flex-1 h-screen overflow-scroll bg-gray-100 p-3'>
        <Outlet/>
      </main>
      <Resumen/>
      </div>
  )
}
