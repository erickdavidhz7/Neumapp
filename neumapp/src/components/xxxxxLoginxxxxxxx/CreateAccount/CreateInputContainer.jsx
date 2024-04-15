import React from 'react';
import Label from '../Label';
import Input from '../Input';

const CreateInputContainer = ({ label, type, name, id, options, value, onChange }) => {
  return (
    <div className="input-container">
      <Label htmlFor={id}>{label}</Label>
      {type === 'select' ? (
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <Input type={type} name={name} id={id} />
      )}
    </div>
  );
};

export default CreateInputContainer;
