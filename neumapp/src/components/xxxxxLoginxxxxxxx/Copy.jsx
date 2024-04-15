import React from 'react'
import Welcome from './Welcome'

const Copy = ({id}) => {
  return (
    <>
    <section className="copy" id={id}>
      <Welcome />
    </section>
    </>
  )
}

export default Copy
