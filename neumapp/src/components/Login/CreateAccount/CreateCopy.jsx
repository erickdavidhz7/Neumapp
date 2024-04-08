import React from 'react'
import CreateWelcome from './CreateWelcome'
const CreateCopy = ({id}) => {
  return (
    <>
    <section className="copy" id={id}>
      <CreateWelcome />
    </section>
    </>
  )
}

export default CreateCopy
