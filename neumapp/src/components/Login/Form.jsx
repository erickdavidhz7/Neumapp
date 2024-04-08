import React from 'react'

import InputContainer from './InputContainer'
import LoginContainer from './LoginContainer'

const Form = () => {
  return (
    <>
    <form>
      <InputContainer label="Correo" type="text" name="fname" id="fname" />
      <InputContainer label="Contraseña" type="password" name="lname" id="lname" />
      <LoginContainer />
    </form>
    </>
  )
}

export default Form
