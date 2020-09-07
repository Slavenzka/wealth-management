import React from 'react'
import css from './ErrorMessage.module.scss'
import classnames from 'classnames'

const ErrorMessage = ({
  className,
  label
}) => {
  return (
    <p className={classnames(css.error, className)}>
      { label }
    </p>
  )
}

export default ErrorMessage
