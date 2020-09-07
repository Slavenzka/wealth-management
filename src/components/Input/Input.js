import React from 'react'
import css from './Input.module.scss'
import classnames from 'classnames'

const Input = ({
  className,
  register,
  name,
  defaultValue,
  placeholder,
  type = 'text',
  isRequired,
  isError
}) => {
  return (
    <input
      className={classnames(css.input, className, {
        [css.inputError]: isError
      })}
      ref={register}
      name={name}
      type={type}
      defaultValue={defaultValue}
      placeholder={isRequired ? `${placeholder}*` : placeholder}
    />
  )
}

export default Input
