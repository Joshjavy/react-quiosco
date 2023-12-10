import { Outlet} from 'react-router-dom'

export default function Registro() {
  return (
    <>
        <h1 className='text-4xl font-black'>
            Crear tu cuenta
        </h1>
        <p>Crea tu cuenta llenando el formulariio</p>
        <div className='bg-white shadow-md rounded-md mt-10 px- 5 py-10'>
            <form>
                <div className='mb-4'>
                    <label className='text-slate-800' htmlFor='name'>
                        Nombre:
                    </label>
                    <input 
                        type="text"
                        id='name'
                        className='mt-2 w-full p-3 bg-gray-200'
                        name='name'
                        placeholder='Tu nombre'
                    />
                </div>

            </form>

        </div>
   </>
  )
}
