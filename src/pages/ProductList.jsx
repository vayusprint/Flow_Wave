import React, { useEffect, useState } from 'react'
import { products } from '../data/product'
import Container from '../components/Container'
import SubHeaderSection from '../components/SubHeaderSection'
import ProductHeader from '../assets/images/product_header.png'
import ProductCard from '../components/ProductCard'
import ProductCatalog from '../components/ProductCatalog'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {

  const [instrumentList, setInstrumentList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

    const instrumentProducts = products.filter((item) => item.category.toLocaleLowerCase() === 'instrument')
    setInstrumentList(instrumentProducts)

  }, [])

  const handleNavigate = (id) => {
    console.log(id);
    navigate(`/product-detail/${id}`)
    window.scroll({top:0 , behavior:"instant"})
  }

  return (
    <>
      <SubHeaderSection SubheadingDesc={'We manufacture high-performance industrial components engineered for precision, durability, and reliability. Our solutions support global industries with advanced products that drive growth and operational excellence.'} SubheadingTitle={'Our Products'} alt={''} src={ProductHeader} />
      <Container>
        <div className='w-full   flex flex-col gap-[150px] 600px:pt-100 pt-40 600px:pb-100 pb-56 '>

          {/* ------------------------------- Instruments --------------------------------------------- */}
          <div className='w-full flex flex-col 1024px:gap-100 600px:gap-60 gap-48'>
            <div className='flex flex-col gap-28'>
              <div className='flex gap-12'>
                {/* <img src={InstrumentIcon} alt='instrument_Icon' /> */}
                <p className='font-montserrat text-50 leading-50 font-medium text-primaryHeading'>Instrument</p>
              </div>
              <div className='w-full h-0.5 bg-divider rounded-full '></div>
            </div>

            {/* --------------------- Product List --------------------------------------- */}
            <div className='w-full grid 1024px:grid-cols-3 428:grid-cols-2 grid-cols-1 1024px:gap-[64px] 428:gap-40 gap-32 '>
              {
                instrumentList.map((item) => (
                  <ProductCard key={item.id} alt={item.alt} imageBg={item.imageBackground} srcImage={item.image} productName={item.title} productDescription={item.shortDesc} onClick={() => handleNavigate(item.id)} />
                ))
              }
            </div>
          </div>
        </div>
        <ProductCatalog  />
      </Container>
    </>
  )
}

export default ProductList