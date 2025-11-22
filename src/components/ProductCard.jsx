import React from 'react'
import PrimaryButton from './PrimaryButton'

const ProductCard = ({ alt, srcImage, imageBg, productName, productDescription }) => {

    console.log('bg' , imageBg);
    
    return (
        <div className='flex flex-col gap-28 p-32 bg-white rounded-[15px] border border-divider'>
            <div className='relative rounded-lg p-12 flex justify-center items-center'>
                <div className='absolute inset-0 rounded-2xl opacity-10' style={{ backgroundColor: imageBg }} ></div>
                <img loading="lazy" alt={alt} src={srcImage} className='relative z-10 object-contain w-full h-auto max-w-[300px] max-h-[300px]' />
            </div>
            <div className='flex flex-col gap-24'>
                <div className='flex flex-col gap-16'>
                    <p className='font-montserrat font-medium text-32 text-primaryHeading'>{productName}</p>
                    <p className='font-montserrat font-medium text-16 text-muted_text'>{productDescription}</p>
                </div>

                <div className=' border-2 border-divider rounded-full'></div>

                
                <PrimaryButton title={"Product Details"} />
                
            </div>
        </div>
    )
}

export default ProductCard