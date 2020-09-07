import React from 'react'
import css from './PromoBanner.module.scss'
import Container from 'components/Grid/Container'
import { useSelector } from 'react-redux'
import Heading from 'components/Heading/Heading'
import Button, { ButtonTypes } from 'components/Button/Button'
import classnames from 'classnames'

const PromoBanner = ({ className, onButtonClick }) => {
  const paddingTop = useSelector(state => state.ui.globalPaddingTop)

  return (
    <section
      className={classnames(css.section, className)}
      style={{
        minHeight: `calc(100vh - ${paddingTop}px)`
      }}
    >
      <Container className={css.container}>
        <div
          className={css.wrapper}
          style={{
            minHeight: `calc(100vh - ${paddingTop}px)`
          }}
        >
          <Heading
            label='Финансовые услуги Hugs Wealth Management'
            isHidden
          />
          <Heading
            label='We Accumulate Wealth'
            tag='p'
          />
          <p className={css.descriptor}>
            Под грамотным руководством лучших в своем деле <span>возможности безграничны:</span> огромный рынок, триллионы долларов и тысячи инструментов.
          </p>
          <Button
            className={css.buttonMore}
            buttonType={ButtonTypes.ARROW}
            onClick={onButtonClick}
          />
        </div>
      </Container>
    </section>
  )
}

export default PromoBanner
