import React from 'react'
import Container from '../components/Container'
import { Link, useParams } from 'react-router-dom'
import QualitySvg from '../assets/icons/quality.svg'
import DurabilitySvg from '../assets/icons/durability.svg'
import InstallationSvg from '../assets/icons/installation.svg'
import PrecisionSvg from '../assets/icons/presicion.svg'
import ResistanceSvg from '../assets/icons/resistance.svg'
import { products } from '../data/product'

const ProductDetail = () => {

  const { id } = useParams()
  const product = products.find(product => product.id.toString() === id)
  console.log(product.longDesc);


  const product_feature_data = [
    { id: 1, featureName: "Premium Quality", icon: QualitySvg },
    { id: 2, featureName: "High Durability", icon: DurabilitySvg },
    { id: 3, featureName: "Precision Design", icon: PrecisionSvg },
    { id: 4, featureName: "Easy Installation", icon: InstallationSvg },
    { id: 5, featureName: "Corrosion Resistant", icon: ResistanceSvg },
  ]

  return (
    <>
      <Container>
        <div className='w-full pt-12 sm:pt-20 md:pt-28 lg:pt-32 flex flex-col gap-56 md:gap-80 lg:gap-100'>

          {/* --------------------- Product Title --------------------- */}
          <div className='w-full flex flex-col gap-4 md:gap-6'>
            <p className='text-primary text-40 leading-40  font-montserrat font-bold text-center md:text-left'>
              {product.title}
            </p>
            <div className='w-full rounded-full h-[3px] bg-divider'></div>
          </div>

          {/* -------------------- Product Detail --------------------- */}
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 w-full'>

            {/* Product Image Box */}
            <div
              style={{ backgroundColor: product.imageBackground + "1A" }}
              className='w-full lg:w-[55%] flex justify-center items-center p-6 sm:p-12 md:p-16 lg:p-20 xl:p-24 rounded-[15px]'
            >
              <img loading='lazy' src={product.image} className='w-[70%] sm:w-[55%] md:w-[50%] lg:w-[70%]' />
            </div>

            {/* Right Content */}
            <div className='flex flex-col gap-10 w-full lg:w-[45%]'>

              {/* Description */}
              <div className='flex flex-col gap-5'>
                {
                  product.longDesc.length > 0 ?
                    (product.longDesc.map((i, index) => (
                      <p key={index} className='font-montserrat  font-medium text-16 sm:text-18 md:text-20 lg:text-22   text-bodytext'>
                        {i}
                      </p>
                    ))) : (<p className='text-24 leading-24 text-bodytext font-montserrat font-semibold'>-- --</p>)
                }      
              </div>

              {/* Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 w-full'>
                <a
                  href="/Flow_wave_Product_Catalogue_2024.pdf"
                  download="FlowWave-Catalog.pdf"
                  className="w-full py-2 sm:py-3 text-center text-16 sm:text-18 text-white font-montserrat font-medium bg-primary rounded-lg"
                >
                  Download Catalog
                </a>

                <Link to='/contact-us' className='w-full'>
                  <button className='w-full py-2 sm:py-3 text-center text-16 sm:text-18 text-primary font-montserrat font-medium bg-transparent border border-primary rounded-lg'>
                    Get Product Inquiry
                  </button>
                </Link>
              </div>

            </div>

          </div>

          {/* -------------------- Product Features -------------------- */}
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-48 px-24 py-40 bg-white rounded-[15px] border border-divider'>
            {product_feature_data.map((item) => (
              <div key={item.id} className='flex flex-col gap-3 justify-center items-center text-center'>
                <img loading='lazy' src={item.icon} className='max-w-48 sm:max-w-56 md:max-w-56' />
                <p className='font-quicksand font-semibold text-14 sm:text-16 md:text-18 text-muted_text'>{item.featureName}</p>
              </div>
            ))}
          </div>

          {/* ------------------ Technical Specifications ---------------- */}
          <div className='flex flex-col gap-8'>
            <p className='font-montserrat font-medium text-24 sm:text-28 md:text-32 text-primaryHeading'>
              Technical Specifications
            </p>

            <div className='flex flex-col gap-6 p-6 sm:p-8 md:p-10 bg-white rounded-[15px] border border-divider'>

              {/* Header */}
              <div className='flex justify-between text-left font-montserrat text-16 sm:text-18 md:text-20 text-muted_text'>
                <p className='w-1/2'>Parameter</p>
                <p className='w-1/2'>Value</p>
              </div>
              <div className='w-full bg-divider h-px rounded-full'></div>

              {/* Data */}
              <div className='flex flex-col gap-6'>
                {product.specifications && product.specifications.length > 0 ? (
                  product.specifications.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4">
                      <div className="flex justify-between text-left w-full">
                        <p className="w-1/2 font-montserrat font-medium text-16 sm:text-18 md:text-20">{item.parameter}</p>
                        <p className="w-1/2 font-montserrat font-medium text-16 sm:text-18 md:text-20">{item.value}</p>
                      </div>
                      <div className="w-full bg-divider h-px rounded-full opacity-60"></div>
                    </div>
                  ))
                ) : (
                  <p>No specifications available</p>
                )}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </>
  )
}

export default ProductDetail
