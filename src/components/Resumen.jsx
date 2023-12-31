import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco"
import { useAuth } from '../hooks/useAuth';
import ResumenProducto from "./ResumenProducto";


export default function Resumen() {
  const { pedido,total,handleSubmitNuevaOrden } = useQuiosco();
  const { logout } = useAuth({});


  const comprobarPedido = () => pedido.length === 0;

  const handleSubmit=e=>{
    e.preventDefault();
    handleSubmitNuevaOrden( logout );
  }

  return (
    <aside className="md:w-72 h-screen overflow-y-scroll  p-5">
      <h1 className="text-4xl font-black text-center"> Mi pedido </h1>
      <p className="text-lg my-5 text-center"> 
        Aqui podras ver el resumen de tu pedido.
      </p>
      <div className="py-10">
          {pedido.length ===0 ? (
              <p className="text-center text-2xl"> No hay productos seleccionados aun. </p>
          ):(
            pedido.map(producto=>(
                <ResumenProducto 
                  key={ producto.id }
                  producto={ producto }
                />
            ))

          )}

            <p className="text-xl mt-10"> total: { formatearDinero(total) } </p>
      </div>
            <form
              className="w-full"
              onSubmit={handleSubmit}
            
            >

              <input type="submit"
                className={`${comprobarPedido()? 'bg-indigo-100': 'bg-indigo-600 hover:bg-indigo-800 hover:text-white'} 
                    rounded px-5 py-2 text-gray-300 text-center w-full cursor-pointer`}
                value="Confirmar Pedido"
                disabled= { comprobarPedido() }
              />

            </form>
    </aside>
  )
}
