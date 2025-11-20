import React from 'react';
import SubHeaderSection from '../components/SubHeaderSection';
import certificationSubheadeBg from "../assets/images/subheaderbg_certification.png";
import Container from '../components/Container';
import CertificationBlock from '../components/Certifications/CertificationBlock';

// Logos
import fssai from "../assets/images/fssai.png";
import APEDA from "../assets/images/APEDA.png";
import DGFT from "../assets/images/DGFT.png";
import Udyam from "../assets/images/udyam.png";
import india from "../assets/images/india.png";


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
  {
    title: "Udyam Registration Certificate",
    organisation_logo: Udyam, // Replace with Udyam logo if available
    alt_text: "Udyam logo",
    provided_by:
      "Ministry of Micro, Small and Medium Enterprises (MSME), Government of India",
    description:
      "Flow Wave is proudly registered under the Ministry of MSME through the Udyam portal, recognizing our business as a trusted and compliant enterprise within India’s industrial and export sector. This certification highlights our operational transparency, legal standing, and adherence to government-verified business standards.",
    importance:
      "The Udyam Registration strengthens our credibility among global partners and clients, validating Flow Wave as a certified Exporter, Trader, and Merchant under Indian business regulations. It also enables us to access government benefits, financial support programs, and enhances our standing as a reliable industrial brand in both domestic and international markets.",
  },
  {
    title: "APEDA Registration Certificate",
    organisation_logo: APEDA,
    alt_text: "APEDA logo",
    provided_by:
      "Agricultural and Processed Food Products Export Development Authority (APEDA), Ministry of Commerce & Industry, Government of India",
    description:
      "Flow Wave is a registered member of APEDA, authorized to export agricultural and processed food products under the Ministry of Commerce and Industry. This certification recognizes our commitment to maintaining the highest standards of quality, hygiene, and export compliance across all our operations.",
    importance:
      "The APEDA registration strengthens our global credibility as a certified Exporter and Trader, enabling Flow Wave to expand into international markets with confidence. It ensures that all our export activities follow strict government guidelines, guaranteeing safety, quality, and trust for our global partners and clients.",
  },
  {
    title: "Import Export Code (IEC) Certificate",
    organisation_logo: DGFT,
    alt_text: "DGFT logo",
    provided_by:
      "Directorate General of Foreign Trade (DGFT), Ministry of Commerce & Industry, Government of India",
    description:
      "Flow Wave is officially registered with the Directorate General of Foreign Trade (DGFT) and holds a valid Import Export Code (IEC) issued by the Government of India. This certification authorizes us to conduct import and export operations globally while ensuring compliance with international trade laws and standards.",
    importance:
      "The IEC certificate validates Flow Wave’s authority to engage in international trade, expanding our market presence and ensuring compliance with global export-import regulations.",
  },
  {
    title: "GST Registration Certificate",
    organisation_logo: india, 
    alt_text: "GST logo",
    provided_by: "Government of India — Goods and Services Tax Department",
    description:
      "Flow Wave is a registered entity under the Goods and Services Tax (GST) Act, ensuring full compliance with the Indian taxation framework. This registration reflects our commitment to transparent business operations, accurate invoicing, and adherence to national financial regulations.",
    importance:
      "The GST registration strengthens Flow Wave’s credibility as a legally recognized Exporter and Merchant Trader. It allows us to conduct business across India and globally with proper tax documentation, ensuring reliability and trust in every transaction.",
  },
];

const Certification = () => {
  return (
    <>
      <SubHeaderSection
        alt="Certification-image"
        src={certificationSubheadeBg}
        SubheadingTitle="Our Certifications"
        SubheadingDesc="Flow Wave is recognized by leading industrial and quality assurance organizations. Our certifications reflect our commitment to precision, safety, and global manufacturing standards."
      />
      <Container>
        <div className="w-full flex justify-center items-center mt-10">
          <div className="lg:w-[calc(100%-200px)] sm:w-[calc(100%-60px)] w-full flex flex-col gap-40">
            {certifications.map((cert, index) => (
              <CertificationBlock key={index} {...cert} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Certification;
