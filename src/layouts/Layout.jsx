import { Outlet} from 'react-router-dom'
import Modal from 'react-modal'
import Siderbar from '../components/Siderbar'
import Resumen from '../components/Resumen'
import ModalProducto from '../components/ModalProducto'
import useQuiosco from '../hooks/useQuiosco'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root');

export default function Layout() {
  const { modal,handleClickModal } = useQuiosco();
  return (
    <>
      <div className='md:flex '>
        <Siderbar/>
        <main className='flex-1 h-screen overflow-scroll bg-gray-100 p-3'>
          <Outlet/>
        </main>
        <Resumen/>
      </div>
      
      
      <Modal isOpen ={ modal } style={ customStyles }>
        <ModalProducto/>
      </Modal>
      
      </>
  )
}
