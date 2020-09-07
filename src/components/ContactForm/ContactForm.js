import React from 'react'
import css from './ContactForm.module.scss'
import classnames from 'classnames'
import Button, { ButtonTypes } from 'components/Button/Button'
import { useForm } from 'react-hook-form'
import Input from 'components/Input/Input'
import { isEmailValid } from 'utils/forms'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'

const ContactForm = ({ className }) => {
  const { register, errors, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete='none'>
      <div className={classnames(css.wrapper, className)}>
        <Input
          className={css.input}
          name='contact-form-name'
          register={register({
            required: 'Пожалуйста, укажите свое имя'
          })}
          placeholder='Имя'
          isRequired
          isError={errors['contact-form-name']}
        />
        <Input
          className={css.input}
          name='contact-form-phone'
          register={register({
            required: 'Пожалуйста, укажите для связи свой телефон',
            validate: {
              isPhone: value =>
                value === '+' ||
                (!isNaN(+value.split(' ').join('').split('(').join('').split(')').join('')) &&
                  value.split(' ').join('').length < 20) ||
                `Проверьте корректность введенного номера телефона и убедитесь, что он не длиннее 20 символов`,
            }
          })}
          placeholder='Телефон'
          isRequired
          isError={errors['contact-form-phone']}
        />
        <Input
          className={css.input}
          name='contact-form-email'
          register={register({
            validate: value => isEmailValid(value) || 'Введен некорректный адрес электронной почты'
          })}
          placeholder='Email'
          isError={errors['contact-form-email']}
        />
        {Object.values(errors).map(({ message }, index) => message
          ? <ErrorMessage className={css.error} label={message} key={`Form error#${index}`} />
          : null
        )}
        <Button
          className={css.button}
          label='Отправить'
          buttonType={ButtonTypes.STANDARD}
          type='submit'
        />
      </div>
    </form>
  )
}

export default ContactForm
