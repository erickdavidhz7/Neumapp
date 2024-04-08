import React from 'react'
import Link from './Link'
import Button from './Button'

const LoginContainer = () => {
  return (
    <>
      <div className="login-container">
      <p>
        Olvidé mi contraseña
        <Link href="/forgot-password">
          <strong> Click aqui para recuperar</strong>
        </Link>
      </p>
      <Button type="submit">Iniciar Sesión</Button>
      <p>¿Aún no tienes una cuenta?<a href="">Registrate</a></p>
    </div>
    </>
  )
}

export default LoginContainer
