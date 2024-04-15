import React from 'react'
import Label from './Label'
import Input from './Input'

const InputContainer = ({ label, type, name, id }) => {
  return (
    <>
      <div className="input-container">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} name={name} id={id} />
    </div>
    </>
  )
}

export default InputContainer
