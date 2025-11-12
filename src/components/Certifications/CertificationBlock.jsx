import React from 'react'

const CertificationBlock = ({title,provided_by,organisation_logo,alt_text, description, importance}) => {
  return (
    <>
    <div className=' w-full flex justify-center bg-white rounded-[20px] py-40'>
        <div className=' w-[calc(100%-64px)] flex flex-col gap-15'>
            <h1 className=' font-montserrat text-48 font-medium text-primaryHeading border-b-2 border-divider'>{title}</h1>

            <div className=' space-y-48'>
                <div>
                    <h4 className=' font-montserrat font-medium text-24 text-black'>Provided By</h4>
                    <p className=' font-montserrat font-medium text-20 text-muted_text'>{provided_by}</p>
                </div>
                <div>
                    <h4 className=' font-montserrat font-medium text-24 text-black'>Organization Logo</h4>
                    <img src={organisation_logo} alt={alt_text} />
                </div>
                <div>
                    <h4 className=' font-montserrat font-medium text-24 text-black'>Description</h4>
                    <p className=' font-montserrat font-medium text-20 text-muted_text'>{description}</p>
                </div>
                <div>
                    <h4 className=' font-montserrat font-medium text-24 text-black'>Importance of Certification</h4>
                    <p className=' font-montserrat font-medium text-20 text-muted_text'>{importance}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CertificationBlock