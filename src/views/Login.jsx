import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';

export default function Login() {

    const emailref = createRef();
    const passwordref = createRef();

    const [errores, setErrores] = useState([]);
    const { login } = useAuth({
            middleware :'guest',
            url:'/',
            });

    const handleSubnit = async e =>{
        e.preventDefault();
        const datos ={
            email:emailref.current.value,
            password: passwordref.current.value,
        }
        login(datos, setErrores);
        
    }

  return (
    <>
        <h1 className='text-4xl font-black'>
            Iniciar Sesion
        </h1>
        <p>para crear un pedido debes iniciar sesion</p>
        <div className='bg-white shadow-md rounded-md mt-10 px- 5 py-10'>
            <form
                onSubmit={ handleSubnit }
                noValidate
            >
                
                { errores ? errores.map((error, i) => <Alerta key={i}> { error } </Alerta>) : null }
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
                        ref={ emailref }
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
                        ref={ passwordref }
                    />
                </div>

                
                <input type="submit"
                        value="Iniciar Sesion"
                        className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 uppercase font-bol cursor-pointer rounded h-8 shadow-sm'
                />

            </form>

        </div>

        <nav className="mt-5"> <Link to="/auth/registro">
            No tienes una cuenta? Registrate aqui
            </Link></nav>
   </>
  )
}
