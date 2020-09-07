import React from 'react'
import css from './SlideTeam.module.scss'

const SlideTeam = ({
  photo,
  contacts = {},
  description = {}
}) => {
  const { name, rank, email } = contacts
  const { caption, list } = description

  return (
    <div className={css.wrapper}>
      <div className={css.contacts}>
        <h3 className={css.name}>
          { name }
        </h3>
        <p className={css.rank}>
          { rank }
        </p>
        <a href={`mailto:${email}`} className={css.email}>
          { email }
        </a>
      </div>
      <div className={css.left}>
        <img className={css.photo} src={photo} alt={`Фотография ${name}`} />
      </div>
      <div className={css.right}>
        <p className={css.caption}>
          { caption }
        </p>
        {list && list.length > 0 &&
          <ul className={css.list}>
            {list.map((item, index) => (
              <li
                className={css.item}
                key={`${name} description item#${index}`}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </ul>
        }
      </div>
    </div>
  )
}

export default SlideTeam
