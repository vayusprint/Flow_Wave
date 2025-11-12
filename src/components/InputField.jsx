import React from 'react'

const InputField = ({name,label,type = 'text',placeholder,value,onChange,error,required = false,}) => {
    return (
        <div className='flex flex-col 428:gap-20 gap-2'>
            {label && (
                <label htmlFor={name} className='font-montserrat font-medium text-black text-18'>
                    {label} {required && <span className="text-red-500 font-montserrat font-medium text-18">*</span>}
                </label>
            )}

            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                name={name}
                className={`border font-medium font-montserrat text-18 text-muted_text rounded-lg py-16 px-16 focus:outline-none  transition-all duration-200 
          ${error ? 'border-red-500 focus:ring-2 focus:ring-red-400' : 'border-divider'}`}
            />

            {error && <p className="font-montserrat text-sm text-red-500">{error}</p>}
        </div>
    )
}

export default InputField