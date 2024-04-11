import React from 'react'

const Button = ({children, onClick}) => {
  return (
    <>
      <button className="signup-btn"onClick={onClick}>{children}</button>
    </>
  )
}

export default Button
