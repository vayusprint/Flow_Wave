import React, { useEffect, useState } from 'react'
import { products } from '../data/product'
import Container from '../components/Container'
import SubHeaderSection from '../components/SubHeaderSection'
import ProductHeader from '../assets/images/product_header.png'
import ProductCard from '../components/ProductCard'

const ProductList = () => {

  const [instrumentList, setInstrumentList] = useState([])

  useEffect(() => {

    const instrumentProducts = products.filter((item) => item.category.toLocaleLowerCase() === 'instrument')
    setInstrumentList(instrumentProducts)

  }, [])

  return (
    <>
      <SubHeaderSection SubheadingDesc={'We manufacture high-performance industrial components engineered for precision, durability, and reliability. Our solutions support global industries with advanced products that drive growth and operational excellence.'} SubheadingTitle={'Our Products'} alt={''} src={ProductHeader} />
      <Container>
        <div className='w-full  pt-100 flex flex-col gap-[150px]'>

          {/* ------------------------------- Instruments --------------------------------------------- */}
          <div className='w-full flex flex-col gap-100'>
            <div className='flex flex-col gap-28'>
              <div className='flex gap-12'>
                {/* <img src={InstrumentIcon} alt='instrument_Icon' /> */}
                <p className='font-montserrat text-50 leading-50 font-medium text-primaryHeading'>Instrument</p>
              </div>
              <div className='w-full h-0.5 bg-divider rounded-full '></div>
            </div>

            {/* --------------------- Product List --------------------------------------- */}
            <div className='w-full grid grid-cols-3 gap-[64px] '>
              {
                instrumentList.map((item) => (
                  <ProductCard alt={item.alt} imageBg={item.imageBackground} srcImage={item.image} productName={item.title} productDescription={item.shortDesc} />
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ProductList