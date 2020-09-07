import React, { useContext, useState } from 'react'
import css from './GetConsultBanner.module.scss'
import Container from 'components/Grid/Container'
import FormContext from 'contexts/FormContext'
import ContactForm from 'components/ContactForm/ContactForm'
import IconSent from 'assets/icons/IconSent'

const GetConsultBanner = () => {
  const [isSent, updateSentStatus] = useState(false)
  const formRefCreator = useContext(FormContext)

  return (
    <div className={css.wrapper} ref={formRefCreator}>
      <Container className={css.container}>
        <p className={css.slogan}>
          Швейцарский сервис рядом
        </p>
        {!isSent &&
          <>
            <p className={css.descriptor}>
              Финансовые советники WMHUGS всегда готовы дать Вам консультацию и готовы ответить на
              вопросы по управлению благосостоянием.
            </p>
            <ContactForm className={css.form} unpdateStatus={updateSentStatus} />
          </>
        }
        {isSent &&
          <>
            <IconSent className={css.iconSent} />
            <p className={css.success}>
              Ваши данные отправлены!<br/>В самое ближайшее время мы свяжемся с Вами
            </p>
          </>
        }
      </Container>
    </div>
  )
}

export default GetConsultBanner
