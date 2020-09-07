import React from 'react'
import css from './PortfolioBanner.module.scss'
import BannerTemplate from 'components/BannerTemplate/BannerTemplate'
import diagram from 'assets/images/PortfolioBanner__diagram.png'

const PortfolioBanner = ({ id }) => {
  return (
    <BannerTemplate
      bgColorClass={css.wrapper}
      slideIndex={3}
      heading='Формирование портфеля'
      id={id}
    >
      <div className={css.content}>
        <p className={css.slogan}>
          Где выше Доходность и Риск?
        </p>
        <p className={css.recipe}>
          Персональные сервис и&nbsp;опыт команды&nbsp;&mdash; стратегия успеха
        </p>
        <p className={css.descriptor}>
          Наиболее эффективный Управляемый инвестиционный портфель,
          отобранный по&nbsp;написанным правилам и&nbsp;набор разных инвестиционных активов.
          Инвестиционный портфель&nbsp;&mdash; отлично подходит для накоплений.
          Когда превращаешь время в&nbsp;деньги при помощи сложного процента
          и&nbsp;отбора хороших активов.
        </p>
        <p className={css.goal}>
          Задачи инвестиционного портфеля:
          Минимизировать риск инвестора до заданного им уровня
        </p>
        <img
          className={css.diagram}
          src={diagram}
          alt='Диаграмма активов'
        />
      </div>
    </BannerTemplate>
  )
}

export default PortfolioBanner
