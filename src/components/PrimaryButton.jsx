import React from 'react'

const PrimaryButton = ({ title }) => {
    return (
        <button className=' rounded-lg bg-primary text-white px-4 py-3 text-center'>
            <p>{title}</p>
        </button>
    )
}

export default PrimaryButton