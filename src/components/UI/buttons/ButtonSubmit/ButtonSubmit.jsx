import React from 'react';
import cl from './ButtonSubmit.module.css';

const ButtonSubmit = ({ ...props }) => {

  return (
    <button className={cl.buttonSubmit} {...props}>Submit</button>
  )
}

export default ButtonSubmit;
