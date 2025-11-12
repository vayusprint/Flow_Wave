import React from 'react'
import SubHeaderSection from '../components/SubHeaderSection'
import certificationSubheadeBg from "../assets/images/subheaderbg_certification.png"
import Container from '../components/Container'
import CertificationBlock from '../components/Certifications/CertificationBlock'

import fssai from "../assets/images/fssai.png"

const certifications = [
  {
    title: "FSSAI Certification",
    organisation_logo: fssai,
    alt_text: "FSSAI logo",
    provided_by: "Food Safety and Standards Authority of India (FSSAI)",
    description:
      "The FSSAI certification is a mark of assurance from the Food Safety and Standards Authority of India, ensuring that our exported products meet the highest standards of safety, hygiene, and compliance. As a registered Exporter, Trader, and Merchant, Flow Wave operates under strict quality protocols aligned with national and international food safety regulations.",
    importance:
      "Holding an FSSAI certification enhances our credibility in global markets, assuring our clients that every product we deliver adheres to standardized safety benchmarks. This certification validates our commitment to delivering safe, reliable, and compliant industrial-grade products for export.",
  },
];

const Certification = () => {
  return (
    <>
      <SubHeaderSection alt={"Certification-image"} src={certificationSubheadeBg} SubheadingTitle={"Our Certifications"} SubheadingDesc={"Flow Wave is recognized by leading industrial and quality assurance organizations. Our certifications reflect our commitment to precision, safety, and global manufacturing standards."} />
      <Container>
        <div className=' w-full flex justify-center items-cente mt-10'>
          <div className=' w-[calc(100%-200px)]'>
            {certifications.map((cert, index) => (
              <CertificationBlock {...cert} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Certification