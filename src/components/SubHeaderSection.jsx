import React from 'react'

const SubHeaderSection = ({src , alt}) => {
    return (
        <div className='w-full h-[400px] bg-amber-300 relative'>
            <div className='bg-black/70 w-full h-full absolute'></div>
            <img loading="lazy" className='w-full h-full object-cover' src={src} alt={alt} />
        </div>
    )
}

export default SubHeaderSection