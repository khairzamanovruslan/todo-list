import React from 'react';
import cl from './ButtonDelete.module.css';

const ButtonDelete = ({ ...props }) => {

  return (
    <button className={cl.buttonDelete} {...props} />
  )
}

export default ButtonDelete;
