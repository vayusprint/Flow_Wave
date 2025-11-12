import React from 'react'
import Container from '../components/Container'
import SubHeaderSection from '../components/SubHeaderSection'
import TermAndConditionImage from '../assets/images/t&cSubheadingImage.png'
import SectionBlock from '../components/SectionBlock'

const TermAndCondition = () => {
  return (
    <>
      <SubHeaderSection SubheadingTitle={'Terms & Conditions'} SubheadingDesc={'Welcome to Flow Wave. Please read our Terms & Conditions carefully to understand the rules, responsibilities, and policies that govern your use of our website and business services. By continuing to browse or interact with Flow Wave, you agree to abide by these terms.'} alt={'termsAnd_condition_subheading_image'} width={'1200px'} src={TermAndConditionImage} />
      <Container>
        <div className='flex flex-col gap-56 pt-100'>

          {/* ------------------------ 1. Introduction ------------------------------------*/}
          <SectionBlock
            description={'Welcome to Flow Wave, a certified trading and export company committed to delivering quality products with reliability and trust. By accessing or using our website, you agree to comply with these Terms & Conditions. If you do not agree, please refrain from using our website or services. These terms govern your access to our website, use of services, and any transactions or interactions made through Flow Wave.'}
            title={'1. Introduction'}
          />


          {/* ------------------------ 2. Nature of Business ------------------------------------*/}
          <SectionBlock
            title={'2. Nature of Business'}
            description={'Flow Wave operates as an Exporter and Merchant Trader, specializing in sourcing and supplying certified products in compliance with Indian export standards and egulations. We hold certifications from government-recognized bodies such as:'}
            list={
              [
                'FSSAI (Food Safety and Standards Authority of India)',
                'APEDA (Agricultural and Processed Food Products Export Development Authority)',
                'Udyam Registration for MSME classification',
                'IEC (Import Export Code) for export operations',
                'GST Registration for tax compliance',
              ]
            }
            extraText={'These credentials ensure that every product and transaction conducted under Flow Wave adheres to the highest quality, safety, and legal standards.'}
          />


          {/* ------------------------ 3. Use of Website ------------------------------------*/}
          <SectionBlock
            title={'3. Use of Website'}
            description={'By using this website, you agree to:'}
            list={
              [
                'Access it only for lawful business or informational purposes',
                'Avoid using it in a manner that may harm the website, the company, or other users.',
                'Not attempt unauthorized access to restricted areas or data.',
              ]
            }
            extraText={'Any misuse or unauthorized activity may result in suspension of access or legal action.'}
          />


          {/* ------------------------ 4. Product and Service Information ------------------------------------*/}
          <SectionBlock
            title={'4. Product and Service Information'}
            description={'We strive to ensure all product descriptions, prices, and certifications listed on our website are accurate and up-to-date However, Flow Wave reserves the right to modify or discontinue any product, pricing, or specification at any time without prior notice. We are not liable for any typographical errors or inaccuracies in product listings.'}
          />


          {/* ------------------------ 5. Orders and Transactions ------------------------------------*/}
          <SectionBlock
            title={'5. Orders and Transactions'}
            list={
              [
                'All product orders are subject to availability and confirmation.',
                'Flow Wave reserves the right to accept or reject any order at its discretion.',
                'Prices mentioned on the website are exclusive of taxes, duties, and shipping unless stated otherwise.',
                'In case of cancellation, refunds (if applicable) will be processed in accordance with our company’s refund policy.',
              ]
            }
          />


          {/* ------------------------ 6. Intellectual Property Rights ------------------------------------*/}
          <SectionBlock
            title={'6. Intellectual Property Rights'}
            description={'All content available on this website—including text, graphics, images, logos, videos, and design elements—is the exclusive property of Flow Wave or its licensors.You may not copy, reproduce, republish, distribute, or use any content for commercial purposes without our prior written consent.'}
          />


          {/* ------------------------ 7. Third-Party Links ------------------------------------*/}
          <SectionBlock
            title={'7. Third-Party Links'}
            description={'Our website may include links to external websites for user convenience. Flow Wave does not control or endorse these external sites and is not responsible for their content, privacy practices, or terms of use.'}
          />


          {/* ------------------------ 8. Limitation of Liability ------------------------------------*/}
          <SectionBlock
            title={'8. Limitation of Liability'}
            description={'Flow Wave shall not be liable for any loss, damage, or expense arising from:'}
            list={
              [
                'Use or inability to use our website or services.',
                'Errors in product details or information.',
                'Technical issues, downtime, or server interruptions.',
                'Unauthorized access to user data due to external factors.'
              ]
            }
            extraText={'Our total liability shall not exceed the value of the transaction made by the user.'}
          />


          {/* ------------------------ 9. Indemnification ------------------------------------*/}
          <SectionBlock
            title={'9. Indemnification'}
            description={'You agree to indemnify and hold harmless Flow Wave, its employees, directors, and agents from any claims, liabilities, damages, or expenses arising from your misuse of our website or violation of these terms.'}
          />


          {/* ------------------------ 10. Governing Law ------------------------------------*/}
          <SectionBlock
            title={'10. Governing Law'}
            description={'These Terms & Conditions shall be governed by the laws of India, and any disputes shall fall under the jurisdiction of the courts located in Vadodara.'}
          />


        </div>
      </Container>
    </>
  )
}

export default TermAndCondition