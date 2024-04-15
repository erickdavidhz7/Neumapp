import React from 'react'
import LeftSection from '../LeftSection'
import CreateRightSection from './CreateRightSection'

const CreateSplitScreen = () => {
  return (
    <>
      <div className="split-screen">
        <LeftSection />
        <CreateRightSection />
      </div>
    </>
  )
}

export default CreateSplitScreen

