import React from 'react'

const PrimaryButton = ({ title, pl, pr, onClick, type, width }) => {
    return (
        <button type={type} onClick={onClick} className=' rounded-lg bg-primary  py-12' style={{paddingLeft:pl , paddingRight:pr , width:width}}>
            <p className='text-white text-center font-medium font-montserrat text-20 leading-20'>{title}</p>
        </button>
    )
}

export default PrimaryButton