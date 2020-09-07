import React from 'react'
import css from './BannerTemplate.module.scss'
import Container from 'components/Grid/Container'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { Waypoint } from 'react-waypoint'
import { setVisibleBanner } from 'store/actions'

export const BannerPalettes = {
  DARK: 'dark',
  LIGHT: 'light'
}

const BannerTemplate = ({
  className,
  children,
  id,
  bgColorClass,
  heading,
  slideIndex = 0,
  palette = BannerPalettes.DARK,
  outOfContainerElements,
  onLeave
}) => {
  const dispatch = useDispatch()
  const slidesQuantity = useSelector(state => state.ui.slidesQuantity)
  const isScrolling = useSelector(state => state.ui.isScrolling)

  const items = new Array(slidesQuantity).fill('').map((_, index) => {
    const isActiveItem = index === slideIndex
    return (
      <li
        className={classnames(css.item,{
          [css.itemActive]: isActiveItem
        })}
        key={`Slides list item#${index}`}
      >
        {isActiveItem
          ? <h2 className={css.label}>{ `${index + 1 < 10 ? `0${index + 1}` : index + 1} ${heading}` }</h2>
          : `Inactive slide reference`
        }
      </li>
    )
  })

  return (
    <Waypoint
      onEnter={() => {
        if (!isScrolling) {
          dispatch(setVisibleBanner(id))
        }
      }}
      onLeave={onLeave}
      bottomOffset='40%'
      topOffset='40%'
    >
      <section className={bgColorClass} id={id}>
        <Container className={classnames(css.wrapper, className, {
          [css.wrapperLight]: palette === BannerPalettes.LIGHT
        })}>
          <ul className={css.list}>
            { items }
          </ul>
          { children }
        </Container>
        { outOfContainerElements }
      </section>
    </Waypoint>
  )
}

export default BannerTemplate
