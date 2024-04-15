import React, {useState } from 'react'
import FormInput from './FormInput'
import Link from './Link'
import axios from 'axios'
import Button from './Button'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('BACKENDENDPOINT/login', {
        username,
        password,
      });
      const { data } = response;
      
      console.log(data); 
    } catch (error) {
   
      console.error(error);
    }
  };
  return (
    <>
   <form onSubmit={handleSubmit}>
        <section className="copy" id="welcome">
          <h2>Bienvenido</h2>
          <FormInput label="Usuario" type="text" name="username" id="fname" value={username} onChange={(e) => setUsername(e.target.value)} />
          <FormInput label="Contraseña" type="password" name="password" id="lname" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Link href="/forgot-password">
            Olvidé mi contraseña<strong> Click aqui para recuperar</strong>
          </Link>
          <Button type="submit">Iniciar Sesión</Button>
          <Button type="submit">Registrarme</Button>
        </section>
      </form>
    </>
  )
}

export default LoginForm
