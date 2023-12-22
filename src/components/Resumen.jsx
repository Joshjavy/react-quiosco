import useQuiosco from "../hooks/useQuiosco"

export default function Resumen() {
  const { pedido } = useQuiosco();
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
            <p>Si hay algo </p>
          )}

            <p className="text-xl mt-10"> total: { '' } </p>
      </div>
            <form className="w-full">
              <input type="submit"
                className="bg-indigo-600 hover:bg-indigo-800 hover:text-white rounded px-5 py-2 text-white text-center w-full cursor-pointer"
                value="Confirmar Pedido"
              />
            </form>
    </aside>
  )
}
