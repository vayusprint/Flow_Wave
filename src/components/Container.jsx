import React from 'react'

const Container = ({children}) => {
    return (
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-32 lg:px-48 xl:px-20 ">
            {children}
        </div>
    )
}

export default Container