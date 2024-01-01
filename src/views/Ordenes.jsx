import useSwr from 'swr';
import clienteAxios from '../config/axios'
import { formatearDinero } from "../helpers" 

export default function Ordenes() {
  const token = localStorage.getItem('AUTH_TOKEN');
  const fetcher = ()=> clienteAxios('/api/pedidos',{
        headers:{
          Authorization:`Bearer ${token}`
      }
    })

  //const { data, error, isLogin } =useSwr ('/api/pedidos',fetcher,{ refreshInterval: 1000})
  const { data, error, isLoading } =useSwr ('/api/pedidos',fetcher)
  if(isLoading) return 'Cargando...';
  return (
    <>
      <h1 className='text-4xl font-black'> Ordenes</h1>
      <p className='text-2xl my-10'> Administra las ordenes desde aqui</p>

      <div className='grid grid-cols-3 gap-5'>
       {
        data.data.data.map(pedido => (
          <div key={pedido.id}
                className='p-5 bg-white shadow space-y-2 border-b relative pb-14'
            >
              <p className='text-xl font-bold text-slate-600'>
                  Contenido del pedido: 
              </p>
              {
              pedido.productos.map( producto =>(
                  <div 
                    key={ producto.id}
                    className='border-b border-b-slate-200 last-of-type:border-none py-2'
                  >
                    <p className='text-sm'> ID: {producto.id}</p>
                    <p className='text-sm'>{producto.nombre}</p>
                    <p className='text-sm'>Cantidad: {''} <span className='font-bold'> { producto.pivot.cantidad } </span></p>
                  </div>
                ))}
                <p className='text-lg font-bold text-slate-500'> Cliente: {''} <span className='font-normal'> { pedido.user.name}</span></p>
                <p className='text-lg font-bold text-amber-600'> Total a pagar: {''} <span className='font-normal text-slate-600'> { formatearDinero(pedido.total)}</span></p>
                <button type="button"
          className='
          absolute inset-x-0 bottom-0
          bg-indigo-600 hover:bg-indigo-800 rounded px-5 py-2 text-gray-300 text-center w-full cursor-pointer'
        > Completar pedido </button>
          </div>
          
        ))}
        
      </div>
    </>
  )
}
