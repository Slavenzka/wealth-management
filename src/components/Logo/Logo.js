import React from 'react'
import css from './Logo.module.scss'
import { Link } from 'react-router-dom'
import IconLogo from 'assets/icons/IconLogo'

const Logo = ({
  url
}) => {
  return url
    ? (
      <Link to={url} className={css.logo}>
        <IconLogo className={css.icon} />
      </Link>
    )
    : <p className={css.logo}>
      <IconLogo className={css.icon} />
    </p>
}

export default Logo
