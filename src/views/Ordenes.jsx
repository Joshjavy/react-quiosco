import useSwr from 'swr';
import clienteAxios from '../config/axios'


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

      <div className=''>
       {
        data.data.data.map(pedido => (
          <div key={pedido.id}
                className='p-5 bg-white shadow space-y-2 border-b'
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
                ))
              }
          </div>
        ))}
      </div>
    </>
  )
}
