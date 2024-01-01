import useSwr from 'swr';
import clienteAxios from '../config/axios';
import { formatearDinero } from "../helpers" ;
import Producto from '../components/Producto';

export default function Productos() {
  const token = localStorage.getItem('AUTH_TOKEN');
  
    const fetcher = ()=> clienteAxios('/api/productos',{
        headers:{
          Authorization:`Bearer ${token}`
      }
    }).then(datos=> datos.data)

  const { data,error, isLoading } = useSwr('/api/productos',fetcher,{removeEventListener:10000});

    if(isLoading) return 'Cargando...';
    console.log(data.data)
  return (
    <>
      <h1 className='text-4xl font-black'> Productos </h1>
      <p className='text-2xl my-10'> Administra los productos desde aqui</p>

      <div className='grid gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        { data.data.map(producto=>(
          <Producto 
            key={ producto.imagen}
            producto={ producto }
            botonDisponible={true}
          />
        ))}
      </div>
    </>
  )
}
