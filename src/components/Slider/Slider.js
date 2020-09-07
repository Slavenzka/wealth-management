import React, { useState } from 'react'
import css from './Slider.module.scss'
import classnames from 'classnames'
// swiper stuff
import SwiperCore, { Controller, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/effect-fade/effect-fade.scss'
import Button from 'components/Button/Button'
import SlideTeam from 'components/Slider/SlideTeam/SlideTeam'

SwiperCore.use([Controller, EffectFade])

const Slider = ({ className, data }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null)
  const [swiperStatus, updateSwiperStatus] = useState({
    isBeginning: true,
    isEnd: false
  })

  const manageSwiperStatus = swiper => {
    if (swiper.isBeginning) {
      updateSwiperStatus({
        isBeginning: true,
        isEnd: false
      })
    }

    if (swiper.isEnd) {
      updateSwiperStatus({
        isBeginning: false,
        isEnd: true
      })
    }

    if (
      !swiper.isBeginning
      && !swiper.isEnd
      && (swiperStatus.isBeginning || swiperStatus.isEnd)
    ) {
      updateSwiperStatus({
        isBeginning: false,
        isEnd: false
      })
    }
  }

  const goPrev = () => {
    if (controlledSwiper) {
      controlledSwiper.slidePrev()
    }
  }

  const goNext = () => {
    if (controlledSwiper) {
      controlledSwiper.slideNext()
    }
  }

  const slides = data.map((slide, index) => (
    <SwiperSlide tag='li' key={`Team slide#${index}`}>
      <SlideTeam {...slide} />
    </SwiperSlide>
  ))

  return (
    <div className={classnames(css.wrapper, className)}>
      <Swiper
        id='main'
        wrapperTag='ul'
        onSwiper={setControlledSwiper}
        allowTouchMove={false}
        onSlideChange={manageSwiperStatus}
        effect='fade'
      >
        { slides }
      </Swiper>
      {data.length > 1 &&
        <>
          <Button
            className={classnames(css.button, css.buttonPrev, {
              [css.buttonDisabled]: swiperStatus.isBeginning
            })}
            onClick={goPrev}
            label='Предыдущий слайд'
          />
          <Button
            className={classnames(css.button, css.buttonNext, {
              [css.buttonDisabled]: swiperStatus.isEnd
            })}
            onClick={goNext}
            label='Следующий слайд'
          />
        </>
      }
    </div>
  )
}

export default Slider
