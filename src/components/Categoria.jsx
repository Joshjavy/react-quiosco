import useQuiosco from "../hooks/useQuiosco"

export default function Categoria({ categoria }) {
    const { handleClickCategoria } = useQuiosco();
    const {icono,id,nombre} = categoria
    return (
            <div className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 hover:text-white cursor-pointer">
                    <img 
                        alt="imagen icono"
                        src={`/img/icono_${icono}.svg`}
                        className="w-12"
                        />
                        <button 
                            type="button"
                            className="text-lg font-bold cursor-pointer truncate"
                            onClick={ handleClickCategoria}                    
                        > {nombre} </button>
                </div>
    )
}
