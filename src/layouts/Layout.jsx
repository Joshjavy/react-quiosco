import { Outlet} from 'react-router-dom'
import Siderbar from '../components/Siderbar'
import Resumen from '../components/Resumen'
import useQuiosco from '../hooks/useQuiosco'


export default function Layout() {
  const { modal } = useQuiosco();
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
