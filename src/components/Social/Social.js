import React from 'react'
import css from './Social.module.scss'
import { Link } from 'react-router-dom'
import IconFacebook from 'assets/icons/IconFacebook'
import IconYoutube from 'assets/icons/IconYoutube'
import IconTelegram from 'assets/icons/IconTelegram'
import classnames from 'classnames'

const Social = ({ className }) => {
  return (
    <ul className={classnames(css.list, className)}>
      <li className={css.item}>
        <Link className={css.link} to={'#'}>
          Мы в Facebook
          <IconFacebook className={css.icon} />
        </Link>
      </li>
      <li className={css.item}>
        <Link className={css.link} to={'#'}>
          Мы в Youtube
          <IconYoutube className={css.icon} />
        </Link>
      </li>
      <li className={css.item}>
        <Link className={css.link} to={'#'}>
          Мы в Telegram
          <IconTelegram className={css.icon} />
        </Link>
      </li>
    </ul>
  )
}

export default Social
