import React from 'react'
import Container from './Container'

const ProductCatalog = () => {
    return (
        <>
            <div className="border-2 border-divider opacity-50 600px:mb-100 mb-48 rounded-full"></div>

            <div
                className="
                        w-full 
                        my-16 sm:my-24 md:my-32 
                        flex flex-col md:flex-row 
                        justify-between 
                        items-start md:items-center 
                        rounded-[15px] 
                        bg-[#0083BF14] 
                        border border-divider 
                        px-6 sm:px-12 lg:px-32 
                        py-8 sm:py-12 lg:py-24
                        gap-10 md:gap-0
                    "
            >
                {/* Text Section */}
                <div className="w-full md:max-w-[75%] space-y-6">
                    <p className="font-montserrat font-medium text-32 leading-32 text-primary">
                        Product Catalog
                    </p>

                    <p className="font-montserrat font-medium text-18 leading-18 text-muted_text">
                        Get a complete overview of Flow Wave’s product line in our detailed brochure.
                        Each product is built with precision, tested for performance, and trusted by leading
                        industries. Download the catalog to explore how we bring reliability to every project.
                    </p>
                </div>

                {/* Button */}
                <a
                    href="/Flow_wave_Product_Catalogue_2024.pdf"
                    download="FlowWave-Catalog.pdf"
                    className="
        py-12 px-16 cursor-pointer
        bg-muted_text 
        rounded-lg 
        font-montserrat 
        text-18 leading-18 font-medium 
        text-white
        w-full md:w-auto
        text-center
        transition-colors duration-300 
    "
                >
                    Download Catalog
                </a>

            </div>

            {/* <div className="border-2 border-divider mt-100"></div> */}
        </>
    )
}

export default ProductCatalog
