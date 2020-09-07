import React, { useState } from 'react'
import css from './OfferBanner.module.scss'
import BannerTemplate, { BannerPalettes } from 'components/BannerTemplate/BannerTemplate'
import classnames from 'classnames'
import { useDispatch } from 'react-redux'
import { setVisibleBanner } from 'store/actions'

const OfferBanner = ({ id }) => {
  const tabsData = [
    {
      label: 'Частным инвесторам',
      list: [
        {
          key: 'Персонализированная стратегия',
          value: 'Адаптивный инвестиционный портфель, включающий риск-профиль Клиента'
        },
        {
          key: 'Управление активами',
          value: 'Повышение эффективности активов. Поиск оптимальных инвестиционных инструментов'
        },
        {
          key: 'Структурирование активов',
          value: 'Обеспечение структурной безопасности активов'
        },
        {
          key: 'Операции в Украине',
          value: 'Управление ликвидностью и валютной позицией'
        },
        {
          key: 'Услуги и экспертиза',
          value: 'Открытие счетов, рекомендации, персональные консультации'
        },
      ]
    },
    {
      label: 'Корпоративным клиентам',
      list: [
        {
          key: 'M&А транзакции',
          value: 'Организация сделок по слиянию, разделению, покупке и продаже компаний. Максимизации прибыли для владельца'
        },
        {
          key: 'Привлечение финансирования',
          value: 'Расширение бизнеса, поддержка его органического роста за счет внешних финансовых ресурсов'
        },
        {
          key: 'Максимизация стоимости бизнеса',
          value: 'Увеличение капитала, оптимизация структуры и минимизация рисков'
        },
        {
          key: 'Мы помогаем реализовать ваши цели!',
          value: 'Мы сопровождаем Вашу персональную структуру инвестиционной стратегии CT 360. Предлагаем защитные стратегии и альтернативные активы.'
        },
      ]
    },
    {
      label: 'Семейные активы и бизнес',
      list: [
        {
          key: 'Мульти-Семейный офис'
        },
        {
          value: 'Это отличное решение для семей, обладающих состоянием свыше $100 млн.'
        },
        {
          value: 'Мы помогаем в управлении активами семьи и семейного бизнеса: от инвестиций до структурирования активов и семейного бизнеса. Последнее особенно важно в современных условиях активного преобразования глобального и локального законодательства.'
        },
        {
          value: 'Мы знаем как наиболее эффективно передать наследство и обеспечить необходимое распределение активов и доходов между указанными вами членами семьи.'
        },
        {
          value: 'Поможем подготовить членов семьи к управлению семейным бизнесом.'
        }
      ]
    },
  ]

  const [activeTab, setActiveTab] = useState(0)
  const dispatch = useDispatch()

  const triggers = tabsData.map(({label}, index) => (
    <li
      className={classnames(css.item, { [css.itemActive]: activeTab === index })}
      key={`Tab trigger#${index}`}
    >
      <button
        className={css.trigger}
        type='button'
        onClick={() => setActiveTab(index)}
      >
        { label }
      </button>
    </li>
  ))

  const tabContent = tabsData[activeTab].list.map(({key, value}, index) => (
    <div className={css.tabItem} key={`Tab#${activeTab} item#${index}`}>
      <dt className={css.key}>
        {key}
      </dt>
      <dd className={css.value}>
        {value}
      </dd>
    </div>
  ))

  return (
    <BannerTemplate
      bgColorClass={css.wrapper}
      slideIndex={1}
      heading='Наши услуги'
      palette={BannerPalettes.LIGHT}
      id={id}
      onLeave={evt => {
        if (evt.currentPosition === 'below') {
          dispatch(setVisibleBanner(null))
        }
      }}
    >
      <div className={css.content}>
        <p className={css.expertise}>
          Мы помогаем реализовать Ваши цели
        </p>
        <p className={css.portfolio}>
          <span className={css.quantity}>
            $120+
          </span>
          миллионов<br/>под управлением
        </p>
        <ul className={css.list}>
          { triggers }
        </ul>
        <div className={css.tabContent}>
          {tabsData[activeTab].list && tabsData[activeTab].list.length > 0 &&
          <>
            <dl className={css.services}>
              { tabContent }
            </dl>
          </>
          }
        </div>
      </div>
    </BannerTemplate>
  )
}

export default OfferBanner
