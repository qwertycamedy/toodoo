import React from 'react'
import cl from './MyInput.module.scss'

const MyInput = ({classes, ...props}) => {
  return (
    <input className={cl.input + ' ' + classes} {...props} />
  )
}

export default MyInput