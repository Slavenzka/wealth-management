import React from 'react'
import css from './PresentationBanner.module.scss'
import BannerTemplate from 'components/BannerTemplate/BannerTemplate'
import Button from 'components/Button/Button'

const PresentationBanner = ({ id }) => {
  return (
    <BannerTemplate
      slideIndex={2}
      heading='Управление активами'
      id={id}
      className={css.wrapper}
    >
      <div className={css.content}>
        <p className={css.slogan}>
          Ваши активы должны эффективно работать
        </p>
        <p className={css.descriptor}>
          Наша команда владеет стратегическим макроэкономическим видением и многолетним опытом работы со всем спектром глобальных финансовых инструментов: инструменты денежного рынка, ценные бумаги, private equity и хедж-фонды, недвижимость, деривативы, структурные продукты, семейный бизнес.
        </p>
        <p className={css.partners}>
          Нашими основными партнерами и конкурентами являются швейцарские и другие международные банки.
        </p>
        <a href='/#' className={css.linkDownload}>
          <Button
            className={css.buttonDisabled}
            isDisabled
            label='Download presentaion'
          />
          Скачать PDF Презентацию
        </a>
      </div>
    </BannerTemplate>
  )
}

export default PresentationBanner
