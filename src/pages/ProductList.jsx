import React, { useEffect, useState } from 'react'
import { products } from '../data/product'
import Container from '../components/Container'
import SubHeaderSection from '../components/SubHeaderSection'
import ProductHeader from '../assets/images/product_header.png'
import ProductCard from '../components/ProductCard'
import ProductCatalog from '../components/ProductCatalog'
import { useNavigate } from 'react-router-dom'
import InstrumentIcon from "../assets/icons/instrument.svg"
import Agriculture from "../assets/icons/agriculture.svg"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const ProductList = () => {

  const [instrumentList, setInstrumentList] = useState([])
  const [agriculture, setAgriculture] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

    const instrumentProducts = products.filter((item) => item.category.toLocaleLowerCase() === 'instrument')
    setInstrumentList(instrumentProducts)

    const agricultureproducts = products.filter((item) => item.category.toLocaleLowerCase() === 'agriculture')
    setAgriculture(agricultureproducts)

  }, [])

  const handleNavigate = (id) => {
    console.log(id);
    navigate(`/product-detail/${id}`)
    window.scroll({ top: 0, behavior: "instant" })
  }

  return (
    <>
      <SubHeaderSection SubheadingDesc={'We manufacture high-performance industrial components engineered for precision, durability, and reliability. Our solutions support global industries with advanced products that drive growth and operational excellence.'} SubheadingTitle={'Our Products'} alt={''} src={ProductHeader} />
      <Container>
        <div className='w-full   flex flex-col gap-[50px] 600px:pt-100 pt-40 600px:pb-100 pb-56 '>
          

          {/* ------------------------------- Instruments --------------------------------------------- */}
          <div className='w-full flex flex-col 1024px:gap-100 600px:gap-60 gap-48'>
            <div className='flex flex-col gap-28'>
              <Accordion>
                <AccordionSummary
                  // expandIcon={uparrow}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <div className='flex gap-12'>
                    <img src={InstrumentIcon} alt='instrument_Icon' />
                    <p className='font-montserrat text-40 leading-40 font-medium text-primaryHeading'>Instrument</p>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className='w-full grid 1024px:grid-cols-3 428:grid-cols-2 grid-cols-1 1024px:gap-[64px] 428:gap-40 gap-32 '>
                    {
                      instrumentList.map((item) => (
                        <ProductCard key={item.id} alt={item.alt} imageBg={item.imageBackground} srcImage={item.image} productName={item.title} productDescription={item.shortDesc} onClick={() => handleNavigate(item.id)} />
                      ))
                    }
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* --------------------- Product List --------------------------------------- */}

          </div>

          {/* ------------------------------- Instruments --------------------------------------------- */}
          <div className='w-full flex flex-col 1024px:gap-100 600px:gap-60 gap-48'>
            <div className='flex flex-col gap-28'>
              <Accordion>
                <AccordionSummary
                  // expandIcon={uparrow}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <div className='flex gap-12'>
                    <img src={Agriculture} alt='instrument_Icon' />
                    <p className='font-montserrat text-40 leading-40 font-medium text-primaryHeading'>Agriculture</p>
                  </div>
                </AccordionSummary>

                <AccordionDetails>

                  {/* --------------------- Product List --------------------------------------- */}
                  <div className='w-full grid 1024px:grid-cols-3 428:grid-cols-2 grid-cols-1 1024px:gap-[64px] 428:gap-40 gap-32 '>
                    {
                      agriculture.length > 0 ? (
                        agriculture.map((item) => (
                          <ProductCard key={item.id} alt={item.alt} imageBg={item.imageBackground} srcImage={item.image} productName={item.title} productDescription={item.shortDesc} onClick={() => handleNavigate(item.id)} />
                        ))
                      ) : (<p className='text-24 leading-24 text-bodytext font-montserrat font-semibold'>-- --</p>)
                    }
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <ProductCatalog />
          </div>
      </Container>
    </>
  )
}

export default ProductList