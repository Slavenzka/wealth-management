import React from 'react'
import css from './Copyright.module.scss'
import classnames from 'classnames'

const Copyright = ({ className }) => {
  const currentYear = new Date().getFullYear()

  return (
    <p className={classnames(css.copyright, className)}>
      Ваш инвестиционный консультант <a href='/#' className={css.link}>HUG'S UKRAINE</a>  © { currentYear }
    </p>
  )
}

export default Copyright
