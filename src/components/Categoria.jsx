import useQuiosco from "../hooks/useQuiosco"

export default function Categoria({ categoria }) {
    const { handleClickCategoria, categoriaActual } = useQuiosco();
    const {icono,id,nombre} = categoria
    return (
            <div className={`${categoriaActual.id === id ? "bg-amber-400 text-white" : "bg-white text-black" } flex items-center gap-4 border w-full p-3 hover:bg-amber-400 hover:text-white cursor-pointer `}>
                    <img 
                        alt="imagen icono"
                        src={`/img/icono_${icono}.svg`}
                        className="w-12"
                        />
                        <button 
                            type="button"
                            className="text-lg font-bold cursor-pointer truncate w-full text-left"
                            onClick={ () => handleClickCategoria(id)}                    
                        > {nombre} </button>
                </div>
    )
}
