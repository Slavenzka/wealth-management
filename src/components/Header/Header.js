import React, { useEffect, useRef, useState } from 'react'
import css from './Header.module.scss'
import Container from 'components/Grid/Container'
import Logo from 'components/Logo/Logo'
import Navigation from 'components/Navigation/Navigation'
import Button, { ButtonPalettes, ButtonSizes, ButtonTypes } from 'components/Button/Button'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import { DeviceTypes } from 'utils/const'
import IconBurger from 'assets/icons/IconBurger'
import IconLogoShort from 'assets/icons/IconLogoShort'
import IconClose from 'assets/icons/IconClose'
import Social from 'components/Social/Social'
import Copyright from 'components/Copyright/Copyright'

const HeaderTypes = {
  ABSOLUTE: 'absolute',
  FIXED: 'fixed',
  HIDDEN_ABSOLUTE: 'hiddenAbsolute',
  HIDDEN_FIXED: 'hiddenFixed'
}

const AdaptiveMenuStatuses = {
  HIDDEN: 'hidden',
  VISIBLE: 'visible'
}


const HEADER_ABSOLUTE_TO_HIDDEN = 150
const HEADER_HIDDEN_TO_FIXED = 300

const Header = ({ createHeaderRef, onButtonClick }) => {
  const deviceType = useSelector(state => state.elastic.deviceType)
  const headerRef = useRef(null)
  const [headerType, setHeaderType] = useState(HeaderTypes.ABSOLUTE)
  const [adaptiveMenuStatus, setAdaptiveMenuStatus] = useState(false)

  const createRef = node => {
    createHeaderRef(node)
    headerRef.current = node
  }

  useEffect(() => {
    let scrollPosition = 0

    const controlHeaderState = () => {
      const newPosition = window.pageYOffset
      const isScrollingDown = newPosition > scrollPosition
      const isScrollingUp = newPosition < scrollPosition

      if (
        newPosition > HEADER_ABSOLUTE_TO_HIDDEN
        && newPosition < HEADER_HIDDEN_TO_FIXED
        && isScrollingDown
      ) {
        setHeaderType(HeaderTypes.HIDDEN_ABSOLUTE)
      }

      if (
        newPosition > HEADER_ABSOLUTE_TO_HIDDEN
        && newPosition < HEADER_HIDDEN_TO_FIXED
        && isScrollingUp
      ) {
        setHeaderType(HeaderTypes.HIDDEN_FIXED)
      }

      if (
        newPosition <= HEADER_ABSOLUTE_TO_HIDDEN
        && isScrollingUp
      ) {
        setHeaderType(HeaderTypes.ABSOLUTE)
      }

      if (
        newPosition >= HEADER_HIDDEN_TO_FIXED
        && isScrollingDown
      ) {
        setHeaderType(HeaderTypes.FIXED)
      }

      scrollPosition = newPosition
    }

    if (deviceType === DeviceTypes.DESKTOP) {
     document.addEventListener('scroll', controlHeaderState)
    }

    return () => document.removeEventListener('scroll', controlHeaderState)
  }, [deviceType])

  const handleClickBurger = () => {
    setAdaptiveMenuStatus(AdaptiveMenuStatuses.VISIBLE)
  }

  const handleCloseMenu = () => {
    setAdaptiveMenuStatus(AdaptiveMenuStatuses.HIDDEN)
  }

  return (
    <header
      className={classnames(css.header, {
        [css.headerHiddenAbsolute]: deviceType === DeviceTypes.DESKTOP && headerType === HeaderTypes.HIDDEN_ABSOLUTE,
        [css.headerHiddenFixed]: deviceType === DeviceTypes.DESKTOP && headerType === HeaderTypes.HIDDEN_FIXED,
        [css.headerFixed]: deviceType === DeviceTypes.DESKTOP && headerType === HeaderTypes.FIXED
      })}
      ref={createRef}
    >
      <Container className={css.wrapper}>
        <Logo />
        <button
          className={css.buttonBurger}
          onClick={handleClickBurger}
          type='button'
        >
          <IconBurger className={css.icon} />
          Управление адаптивным меню
        </button>
        <div
          className={classnames(css.menu, {
            [css.menuVisible]: adaptiveMenuStatus === AdaptiveMenuStatuses.VISIBLE,
            [css.menuHidden]: adaptiveMenuStatus === AdaptiveMenuStatuses.HIDDEN
          })}
        >
            <Container className={css.containerAdaptive}>
              <div className={css.menuTopAdaptive}>
                <IconLogoShort className={css.logoShort} />
                <button
                  className={css.buttonClose}
                  onClick={handleCloseMenu}
                  type='button'
                >
                  Закрыть меню
                  <IconClose className={css.iconClose} />
                </button>
              </div>
            </Container>
          <Navigation className={css.navigation} />
          <Button
            className={css.button}
            buttonType={ButtonTypes.STANDARD}
            label='Личная консультация'
            onClick={onButtonClick}
            size={ButtonSizes.THIN}
            palette={deviceType === DeviceTypes.DESKTOP ? ButtonPalettes.DARK : ButtonPalettes.LIGHTEST}
          />
          <Container className={css.containerAdaptive}>
            <Social className={css.social} />
            <Copyright className={css.copyright} />
          </Container>
        </div>
      </Container>
    </header>
  )
}

export default Header
