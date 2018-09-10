import React from 'react';

const TextArea = ({ text, type, id, value, handleChange }) => (
  <div className='text-area'>
    <label>{text}</label>
    <textarea
      type={type}
      className='form-control'
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default TextArea;
