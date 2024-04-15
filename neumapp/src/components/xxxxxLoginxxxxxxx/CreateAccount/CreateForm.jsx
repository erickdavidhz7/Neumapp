import React, { useState } from 'react';
import CreateCopy from './CreateCopy';
import CreateInputContainer from './CreateInputContainer';
import CreateLoginContainer from './CreateLoginContainer';
import ComboBox from "./ComboBox";

const CreateForm = () => {
  const [role, setRole] = useState('');

  return (
    <>
      <form>
        <CreateCopy id="welcome" />
        <CreateInputContainer label="Nombre" type="text" name="fname" id="fname" />
        <CreateInputContainer label="Apellido" type="password" name="lname" id="lname" />
        <CreateInputContainer label="E-mail" type="password" name="lname" id="lname" />
        <CreateInputContainer label="Contraseña" type="password" name="lname" id="lname" />
        <ComboBox
          label="Role"
          options={[
            { label: 'Admin', value: 'admin' },
            { label: 'User', value: 'user' },
          ]}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <CreateLoginContainer />
      </form>
    </>
  );
}

export default CreateForm;
