import React from 'react'
import Label from './Label'
import Input from './Input'

const FormInput = ({label, ...inputProps }) => {
  return (
    <>
    <div className="input-container">
    <Label htmlFor={inputProps.id}>{label}</Label>
    <Input {...inputProps} />
  </div>
    </>
  )
}

export default FormInput
