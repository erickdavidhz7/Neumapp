import '../Css/styles.css'
import React from 'react';
import Logo from '../Logo';
import Title from '../Title';
import LeftSection from '../LeftSection';
import CreateRightSection from './CreateRightSection';
import SplitScreen from '../SplitScreen';
import CreateForm from "./CreateForm"
import CreateSplitScreen from './CreateSplitScreen';

const CreateAccount = () => {
  return (
    <>
        <CreateSplitScreen>
        <LeftSection>
        <Logo />
        <Title>NeumApp</Title>
      </LeftSection>
      <CreateRightSection>
      <CreateForm></CreateForm>
      </CreateRightSection>
     </CreateSplitScreen>
    </>
  )
}

export default CreateAccount
