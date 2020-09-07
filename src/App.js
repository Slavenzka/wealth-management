import React, { useEffect, useRef } from 'react'
import ElasticAdaptive from 'hoc/ElasticAdaptive'
import Routes from 'Pages/Routes'
import Header from 'components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { setGlobalPaddingTop } from 'store/actions'
import Footer from 'components/Footer/Footer'
import FormContext from 'contexts/FormContext'

const App = () => {
  const headerRef = useRef(null)
  const formRef = useRef(null)
  const fontSize = useSelector(state => state.elastic.curFontSize)
  const dispatch = useDispatch()

  const createHeaderRef = node => headerRef.current = node
  const createFormRef = node => formRef.current = node

  useEffect(() => {
    if (headerRef.current) {
      setTimeout(() => {
        dispatch(setGlobalPaddingTop(headerRef.current.getBoundingClientRect().height))
      }, 500)
    }
  }, [fontSize, dispatch])

  const handleScrollToForm = () => {
    const targetElement = formRef.current

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  return (
    <ElasticAdaptive>
      <Header onButtonClick={handleScrollToForm} createHeaderRef={createHeaderRef} />
      <main>
        <FormContext.Provider value={createFormRef}>
          <Routes />
        </FormContext.Provider>
      </main>
      <Footer />
    </ElasticAdaptive>
  )
}

export default App
