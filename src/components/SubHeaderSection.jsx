import React from 'react'

const SubHeaderSection = ({ src, alt, SubheadingDesc, SubheadingTitle }) => {
    return (
        <div className='w-full 428:h-[400px] h-[260px]  relative'>
            <div className='w-full flex flex-col 1024px:gap-36 428:gap-28 gap-20 absolute z-10 justify-center items-center h-full'>
                <p className='text-primary font-bold font-montserrat text-64 leading-64 w-full text-center'>{SubheadingTitle}</p>
                <p className='font-quicksand font-medium text-20 leading-20 text-white text-center w-4/5 '>{SubheadingDesc}</p>
            </div>
            <div className='bg-black/70 w-full h-full absolute'></div>
            <img loading="lazy" className='w-full h-full object-cover' src={src} alt={alt} />
        </div>
    )
}

export default SubHeaderSection