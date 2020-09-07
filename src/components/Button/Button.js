import React from 'react'
import css from './Button.module.scss'
import classnames from 'classnames'
import IconArrow from 'assets/icons/IconArrow'

export const ButtonTypes = {
  ARROW: 'arrow',
  STANDARD: 'standard'
}

export const ButtonSizes = {
  STANDARD: 'standard',
  THIN: 'thin'
}

export const ButtonPalettes = {
  LIGHTEST: 'lightest',
  DARK: 'dark'
}

const Button = ({
  className,
  onClick = () => {},
  buttonType = ButtonTypes.ARROW,
  size = ButtonSizes.STANDARD,
  palette = ButtonPalettes.LIGHTEST,
  isDisabled,
  label = 'Show more',
  type = 'button'
}) => {
  return (
    <button
      className={classnames(css.button, className, {
        [css.buttonStandard]: buttonType === ButtonTypes.STANDARD,
        [css.buttonThin]: size === ButtonSizes.THIN,
        [css.buttonArrow]: buttonType === ButtonTypes.ARROW,
        [css.buttonDark]: palette === ButtonPalettes.DARK,
        [css.buttonDisabled]: isDisabled
      })}
      onClick={onClick}
      type={type}
    >
      { label }
      {buttonType === ButtonTypes.ARROW &&
        <>
          <IconArrow className={css.iconArrow} />
        </>
      }
    </button>
  )
}

export default Button
