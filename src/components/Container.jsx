import React from 'react'

const Container = ({children}) => {
    return (
        <div className="max-w-[1720px] mx-auto px-100">
            {children}
        </div>
    )
}

export default Container