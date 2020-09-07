import React from 'react'
import css from './SliderBanner.module.scss'
import BannerTemplate from 'components/BannerTemplate/BannerTemplate'
import Slider from 'components/Slider/Slider'
import team1 from 'assets/images/slider__item--1.png'
import { useDispatch } from 'react-redux'
import { setVisibleBanner } from 'store/actions'

const SliderBanner = ({ id }) => {
  const data = [
    {
      photo: team1,
      contacts: {
        name: 'Eric Nayman1',
        rank: 'Глава компании WMHUG\'S',
        email: 'smth@smth.smth',
      },
      description: {
        caption: 'Эрик Найман — руководитель Wealth Management.',
        list: [
          `Идейный лидер робоэдвайзера HUG&rsquo;S и&nbsp;управляющий партнер Capital Times.`,
          `Один из&nbsp;самых успешных профессионалов по&nbsp;управлению активами с&nbsp;1995&nbsp;г.`,
          `С&nbsp;2011 возглавляет направление Управление благосостоянием в&nbsp;компании Capital Times.`
        ]
      }
    },
    {
      photo: team1,
      contacts: {
        name: 'Eric Nayman Eric Nayman',
        rank: 'Глава компании WMHUG\'S Глава компании WMHUG\'S',
        email: 'smthsmthsmth@smthsmth.smth',
      },
      description: {
        caption: 'Эрик Найман — руководитель Wealth Management.',
        list: [
          'Идейный лидер робоэдвайзера HUG\'S и управляющий партнер\n' +
          'Capital Times.',
          'Один из самых успешных профессионалов по управлению\n' +
          'активами с 1995 г.',
          'С 2011 возглавляет направление Управление благосостоянием\n' +
          'в компании Capital Times.'
        ]
      }
    },
  ]

  const dispatch = useDispatch()

  return (
    <>
      <BannerTemplate
        bgColorClass={css.wrapper}
        heading='Наша команда'
        slideIndex={4}
        outOfContainerElements={(
          <Slider
            data={data}
          />
        )}
        id={id}
        onLeave={evt => {
          if (evt.currentPosition === 'above') {
            dispatch(setVisibleBanner(null))
          }
        }}
      >
        <div className={css.content}>
          <div className={css.intro}>
            <p className={css.slogan}>
              Лучшие в мире инвестиций
            </p>
            <p className={css.descriptor}>
              Ваши активы в&nbsp;надежных руках. У&nbsp;нас сильная опытная команда настоящих профессионалов во&nbsp;главе с&nbsp;Эриком Найманом
            </p>
          </div>
        </div>
      </BannerTemplate>
    </>
  )
}

export default SliderBanner
