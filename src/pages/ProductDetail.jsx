import React from 'react'
import Container from '../components/Container'
import PrimaryButton from '../components/PrimaryButton'
import Productimages from '../assets/images/demoProductImage.png'
import { Link } from 'react-router-dom'
import QualitySvg from '../assets/icons/quality.svg'
import DurabilitySvg from '../assets/icons/durability.svg'
import InstallationSvg from '../assets/icons/installation.svg'
import PrecisionSvg from '../assets/icons/presicion.svg'
import ResistanceSvg from '../assets/icons/resistance.svg'

const ProductDetail = () => {


  const product_feature_data = [
    { id: 1, featureName:"Premium Quality" , icon:QualitySvg},
    { id: 2, featureName:"High Durability" , icon:DurabilitySvg},
    { id: 3, featureName:"Precision Design" , icon:PrecisionSvg},
    { id: 4, featureName:"Easy Installation" , icon:InstallationSvg},
    { id: 5, featureName:"Corrosion Resistant" , icon:ResistanceSvg},
  ]

  return (
    <>
      <Container>
        <div className='w-full 600px:pt-100 pt-20 flex flex-col gap-60'>

          {/*---------------------------------------------- Product title ----------------------------------------------*/}
          <div className='w-full flex flex-col 1024px:gap-48 428:gap-32 gap-24'>
            <p className='text-primary text-64 leading-64 font-montserrat font-bold'>Electromagnetic Flow Meter</p>
            <div className='w-full rounded-full h-[3px] bg-divider'></div>
          </div>


          {/*---------------------------------------------- Product Detail----------------------------------------------*/}
          <div className='flex gap-20 w-full'>

            <div className='w-full max-h-[652px] bg-[#173165]/10 flex justify-center items-center py-[108px] px-[225px] rounded-[15px] '>
              <img src={Productimages} className='' />
            </div>

            <div className='flex flex-col gap-60'>
              <div className='flex flex-col gap-28'>
                <p className='font-quicksand font-medium text-24 leading-24 text-bodytext'>The Flow Wave Electromagnetic Flow Meter delivers accurate and reliable flow measurement for conductive liquids across a variety of industrial applications. Using advanced electromagnetic technology, it ensures precise readings without any pressure loss</p>
                <p className='font-quicksand font-medium text-24 leading-24 text-bodytext'>Built with durable, corrosion-resistant materials, this flow meter performs efficiently in demanding environments such as water treatment, chemical processing, and food industries. Its digital display provides easy monitoring and seamless integration with control systems.</p>
                <p className='font-quicksand font-medium text-24 leading-24 text-bodytext'>With no moving parts and minimal maintenance, the Flow Wave Electromagnetic Flow Meter offers long service life and consistent performance — making it a dependable choice for industries that value precision and durability.</p>
              </div>

              <div className='flex gap-8 w-full justify-between items-center'>
                <a href="/Flow_wave_Product_Catalogue_2024.pdf" download="FlowWave-Catalog.pdf" className="w-full py-12 text-center text-18 leading-18 text-white font-montserrat font-medium bg-primary rounded-lg cursor-pointer">Download Catalog</a>
                <Link to='/contact-us' className='w-full'>
                  <button className='w-full py-12 text-center text-18 leading-18 text-primary font-montserrat font-medium bg-transparent border border-primary rounded-lg cursor-pointer'>Get Product Inquiry</button>
                </Link>
              </div>
            </div>

          </div>


          {/* --------------------------------------------- Product Feature ---------------------------------------------- */}
          <div className='flex justify-between px-[64px] items-center bg-white rounded-[15px] border border-divider py-40'>
            {product_feature_data.map((item) => (
              <div key={item.id} className='flex flex-col gap-16 justify-center items-center'>
                <img src={item.icon} className='max-w-40' />
                <p className='font-quicksand font-semibold text-18 leading-18 text-muted_text '>{item.featureName}</p>
              </div>
            ))}
          </div>

          {/* -------------------------------------------- Technical Specifications --------------------------------------- */}
          <div className='flex flex-col gap-52'>
            <p className='font-montserrat font-medium text-32 leading-32 text-primaryHeading'>Technical Specifications</p>

            <div className='flex flex-col gap-24 p-32 bg-white rounded-[15px] border border-divider'>
              <div className='flex flex-col gap-16'>
                <div className='flex gap-20 w-full'>
                  <p className='font-montserrat font-normal text-24 leading-24 text-muted_text w-full '>Parameter</p>
                  <p className='font-montserrat font-normal text-24 leading-24 text-muted_text w-full '>Value</p>
                </div>
                <div className='w-full bg-divider h-0.5 rounded-full '></div>
              </div>

              <div className='flex flex-col gap-24'>

                {/* --------------------------------------- */}
                <div className='flex flex-col gap-24'>
                  <div className='flex gap-20 w-full'>
                    <p className='font-montserrat font-medium text-20 leading-20 text-black w-full '>Size Range</p>
                    <p className='font-montserrat font-medium text-20 leading-20 text-black w-full '>15 mm to 600 mm</p>
                  </div>
                  <div className='w-full bg-divider h-px rounded-full opacity-70 '></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </>
  )
}

export default ProductDetail