import React from 'react'

const PrimaryButton = ({ title, pl, pr, onClick, type }) => {
    return (
        <button type={type} onClick={onClick} className=' rounded-lg bg-primary text-white text-center py-12' style={{paddingLeft:pl , paddingRight:pr}}>
            <p>{title}</p>
        </button>
    )
}

export default PrimaryButton