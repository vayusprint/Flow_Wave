import React from 'react'
import Container from "../components/Container"
import { products } from '../data/product'
import ProductCard from './ProductCard'
import ProductCatalog from './ProductCatalog'

const FeaturedProduct = ({ hideHeading = false }) => {
  return (
    <>
      <Container>
        <div className=' w-full flex justify-center items-center'>
          <div className=' w-full '>
            {!hideHeading && (
              <div className='flex justify-between items-center gap-60'>
                <p className='font-montserrat font-semibold text-64 leading-64 text-primary text-center'>
                  Featured Products
                </p>
                <div className='border-2 border-divider flex grow'></div>
              </div>
            )}
            {!hideHeading && (
              <p className=' font-montserrat font-normal text-24 leading-24 max-w-7xl pt-36'>Explore our range of precision-engineered industrial components built for performance, durability, and reliability. Each product is designed to meet the highest standards, ensuring consistent quality across every application.</p>
            )}
            <div className='w-full grid  1024px:grid-cols-3 grid-cols-1 1024px:gap-32 428:gap-40 gap-32 '>

              {
                products.map((item) => (
                  <ProductCard alt={item.alt} imageBg={item.imageBackground} srcImage={item.image} productName={item.title} productDescription={item.shortDesc} />
                ))
              }
            </div>
          </div>
        </div>


        <div className='pt-40 sm:pt-60  lg:pt-100'>
          <ProductCatalog />
        </div>
      </Container>
    </>
  )
}

export default FeaturedProduct