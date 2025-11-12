import React from 'react'

const SubHeaderSection = ({ src, alt, SubheadingDesc, SubheadingTitle, width }) => {
    return (
        <div className='w-screen h-[400px] relative'>
            <div className='w-full flex flex-col gap-36 absolute z-99999 justify-center items-center h-full'>
                <p className='text-primary font-bold font-montserrat text-64 w-full text-center'>{SubheadingTitle}</p>
                <p className='font-quicksand font-medium text-20 text-white text-center w-full' style={{width:width}}>{SubheadingDesc}</p>
            </div>
            <div className='bg-black/70 w-full h-full absolute'></div>
            <img loading="lazy" className='w-full h-full object-cover' src={src} alt={alt} />
        </div>
    )
}

export default SubHeaderSection