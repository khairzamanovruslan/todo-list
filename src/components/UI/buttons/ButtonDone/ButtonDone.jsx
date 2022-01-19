import React from 'react';
import cl from './ButtonDone.module.css';

const ButtonDone = ({ ...props }) => {

  return (
    <button className={cl.buttonDone} {...props} />
  )
}

export default ButtonDone;
