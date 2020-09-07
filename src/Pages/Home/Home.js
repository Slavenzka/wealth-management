import React, { useEffect, useRef } from 'react'
import PromoBanner from 'Pages/Home/PromoBanner/PromoBanner'
import OfferBanner from 'Pages/Home/OfferBanner/OfferBanner'
import { useDispatch, useSelector } from 'react-redux'
import { setSlidesQuantity } from 'store/actions'
import GetConsultBanner from 'Pages/Home/GetConsultBanner/GetConsultBanner'
import SliderBanner from 'Pages/Home/SliderBanner/SliderBanner'
import PresentationBanner from 'Pages/Home/PresentationBanner/PresentationBanner'
import PortfolioBanner from 'Pages/Home/PortfolioBanner/PortfolioBanner'

const Home = () => {
  const paddingTop = useSelector(state => state.ui.globalPaddingTop)
  const contentRef = useRef(null)
  const dispatch = useDispatch()

  const createContentRef = node => contentRef.current = node

  useEffect(() => {
    if (contentRef.current) {
      dispatch(setSlidesQuantity(contentRef.current.children.length))
    }
  }, [dispatch])

  const handleClickButtonMore = () => {
    const targetElement = contentRef.current.querySelector('#services')

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  return (
    <>
      <div
        style={{
          paddingTop: `${paddingTop}px`
        }}
        ref={createContentRef}
      >
        <PromoBanner onButtonClick={handleClickButtonMore} />
        <OfferBanner id='services' />
        <PresentationBanner id='management' />
        <PortfolioBanner id='portfolio' />
        <SliderBanner id='team' />
      </div>
      <GetConsultBanner id='form' />
    </>
  )
}

export default Home
