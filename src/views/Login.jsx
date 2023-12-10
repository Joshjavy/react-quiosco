export default function Login() {
  return (
    <>
        <h1 className='text-4xl font-black'>
            Iniciar Sesion
        </h1>
        <p>para crear un pedido debes iniciar sesion</p>
        <div className='bg-white shadow-md rounded-md mt-10 px- 5 py-10'>
            <form>
                

                <div className='mb-4'>
                    <label className='text-slate-800' htmlFor='email'>
                        Email:
                    </label>
                    <input 
                        type="email"
                        id='email'
                        className='mt-2 w-full p-3 bg-gray-200'
                        name='email'
                        placeholder='Tu Email'
                    />
                </div>

                <div className='mb-4'>
                    <label className='text-slate-800' htmlFor='password'>
                        password:
                    </label>
                    <input 
                        type="password"
                        id='password'
                        className='mt-2 w-full p-3 bg-gray-200'
                        name='password'
                        placeholder='Tu password'
                    />
                </div>

                
                <input type="submit"
                        value="Iniciar Sesion"
                        className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 uppercase font-bol cursor-pointer'
                />

            </form>

        </div>
   </>
  )
}
