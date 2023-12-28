import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/axios';
import Alerta from '../components/Alerta';

export default function Registro() {
    const nameref = createRef();
    const emailref = createRef();
    const passwordref = createRef();
    const passwordConfirmationref = createRef();

    const [errores, setErrores] = useState([]);

    const handleSubnit = async e =>{
        e.preventDefault();
        const datos ={
            name: nameref.current.value,
            email:emailref.current.value,
            password: passwordref.current.value,
            password_confirmation: passwordConfirmationref.current.value,
        }
        
        try{
            const respuesta = await clienteAxios.post('/api/registro', datos);
            console.log(respuesta);
        }catch(error){
            setErrores( Object.values(error.response.data.errors) );
        }
    }


  return (
    <>
        <h1 className='text-4xl font-black'>
            Crear tu cuenta
        </h1>
        <p>Crea tu cuenta llenando el formulariio</p>
        <div className='bg-white shadow-md rounded-md mt-10 px- 5 py-10'>
            <form
                onSubmit={handleSubnit}
                noValidate
            >
                { errores ? errores.map((error, i) => <Alerta key={i}> { error } </Alerta>) : null }
                <div className='mb-4'>
                    <label className='text-slate-800' htmlFor='name'>
                        Nombre:
                    </label>
                    <input 
                        type="text"
                        id='name'
                        className='mt-2 w-full p-3 bg-gray-200'
                        name='name'
                        ref={nameref}
                        placeholder='Tu nombre'
                    />
                </div>

                <div className='mb-4'>
                    <label className='text-slate-800' htmlFor='email'>
                        Email:
                    </label>
                    <input 
                        type="email"
                        id='email'
                        className='mt-2 w-full p-3 bg-gray-200'
                        name='email'
                        ref={emailref}
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
                        ref = {passwordref}
                        placeholder='Tu password'
                    />
                </div>

                <div className='mb-4'>
                    <label className='text-slate-800' htmlFor='password_confirmation'>
                        Repetir password:
                    </label>
                    <input 
                        type="password_confirmation"
                        id='password'
                        className='mt-2 w-full p-3 bg-gray-200'
                        name='password_confirmation'
                        ref={passwordConfirmationref}
                        placeholder='Repite tu password'
                    />
                </div>
                <input type="submit"
                        value="Crear Cuenta"
                        className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 uppercase font-bol cursor-pointer'
                />

            </form>

        </div>
        <nav className="mt-5"> <Link to="/auth/login">
            Tienes una cuenta? inicia sesion
            </Link></nav>
   </>
  )
}
