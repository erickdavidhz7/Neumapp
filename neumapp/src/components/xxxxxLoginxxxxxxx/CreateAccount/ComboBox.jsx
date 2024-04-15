import React, { useState } from 'react';

const ComboBox = ({ label, options, value, onChange }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
