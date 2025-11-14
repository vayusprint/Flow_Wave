import React from "react";

const SectionBlock = ({ title, description, list, extraText }) => {
    return (
        <div className="flex flex-col gap-8">
            
            <h2 className="font-medium font-montserrat text-40 leading-40 text-primaryHeading">{title}</h2>

            
            <div className="flex flex-col gap-28">
                {description && (
                    <p className="font-montserrat font-normal text-20 leading-20 text-bodytext">{description}</p>
                )}


                {list && list.length > 0 && (
                    <ul className="list-disc list-inside space-y-8 font-montserrat font-normal text-20 leading-20 text-bodytext pl-28">
                        {list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}


                {extraText && (
                    <p className="font-montserrat font-normal text-20 leading-20 text-bodytext">{extraText}</p>
                )}
            </div>
        </div>
    );
};

export default SectionBlock;
