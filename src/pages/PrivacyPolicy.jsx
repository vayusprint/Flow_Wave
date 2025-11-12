import React from 'react'
import SubHeaderSection from '../components/SubHeaderSection'
import Container from '../components/Container'
import SectionBlock from '../components/SectionBlock'
import TermAndConditionImage from '../assets/images/t&cSubheadingImage.png'

const PrivacyPolicy = () => {
  return (
      <>
          <SubHeaderSection SubheadingTitle={'Privacy Policy'} SubheadingDesc={'At Flow Wave, we value your trust and are committed to safeguarding your personal and business information. Our Privacy Policy outlines how we collect, use, and protect your data to ensure complete transparency and confidentiality in every interaction.'} alt={'termsAnd_condition_subheading_image'} width={'1200px'} src={TermAndConditionImage} />
          
          <Container>
              <div className='flex flex-col gap-56 pt-100'>

                  {/* ------------------------ 1. Introduction ------------------------------------*/}
                  <SectionBlock
                      title={'1. Introduction'}
                      description={'At Flow Wave, your privacy is our priority. This Privacy Policy explains how we collect, use, store, and protect your personal and business information when you interact with our website, fill out forms, or contact us for inquiries. By using our website, you consent to the practices described in this policy.'}
                  />


                  {/* ------------------------ 2. Nature of Business ------------------------------------*/}
                  <SectionBlock
                      title={'2. Information We Collect'}
                      description={'We may collect personal, professional, and technical information including:'}
                      list={
                          [
                            'Full Name',
                            'Email Address',
                            'Contact Number',
                            'Company or Business Name',
                            'Address and Country',
                            'Inquiry Message or Order Details',
                            'Website interaction data(via analytics or cookies) '
                          ]
                      }
                  />


                  {/* ------------------------ 3. How We Use Your Information ------------------------------------*/}
                  <SectionBlock
                      title={'3. How We Use Your Information'}
                      description={'The information collected is used strictly for:'}
                      list={
                          [
                            'Responding to your inquiries and requests',
                            'Sending product or catalog details',
                            'Processing business communications and transactions',
                            'Improving our website, products, and services',
                            'Sending updates or promotional materials(only with consent)',
                            'Maintaining compliance with legal and certification requirements'
                          ]
                      }
                      extraText={'Any misuse or unauthorized activity may result in suspension of access or legal action.'}
                  />


                  {/* ------------------------ 4. Data Security ------------------------------------*/}
                  <SectionBlock
                      title={'4. Data Security'}
                      description={'We employ industry-standard security measures to safeguard your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and Flow Wave cannot guarantee absolute data security.'}
                  />


                  {/* ------------------------ 5. Sharing and Disclosure ------------------------------------*/}
                  <SectionBlock
                      title={'5. Sharing and Disclosure'}
                      description={'We do not sell, trade, or rent your personal information to others. Data may be shared only in the following cases:'}
                      list={
                          [
                            'With trusted partners or service providers assisting in our operations',
                            'When required by law, government agencies, or regulatory authorities(e.g., FSSAI, APEDA, GST audits)',
                            'To prevent fraud or protect company rights',
                          ]
                      }
                  />


                  {/* ------------------------ 6. Use of Cookies ------------------------------------*/}
                  <SectionBlock
                      title={'6. Use of Cookies'}
                      description={'Our website may use cookies to improve user experience and analyze site performance. Cookies are small files stored on your browser to help us understand preferences and optimize functionality. You may disable cookies in your browser settings, though some features may not function properly.'}
                  />


                  {/* ------------------------ 7. Third-Party Services ------------------------------------*/}
                  <SectionBlock
                      title={'7. Third-Party Services'}
                      description={'Flow Wave may use trusted third-party platforms (like Google Analytics or payment gateways) to enhance services. These third parties have their own privacy policies, and we are not responsible for their data handling practices.'}
                  />


                  {/* ------------------------ 8. Data Retention ------------------------------------*/}
                  <SectionBlock
                      title={'8. Data Retention'}
                      description={'We retain your data only as long as necessary for business, legal, or compliance purposes. Once no longer required, your data is securely deleted or anonymized.'}
                  />


                  {/* ------------------------ 9. Your Rights ------------------------------------*/}
                  <SectionBlock
                      title={'9. Your Rights'}
                      description={'You have the right to:'}
                      list={
                          [
                            'Access your personal data held by us',
                            'Request corrections or updates',
                            'Withdraw consent for marketing communications',
                            'Request deletion of your personal information (subject to legal requirements)'
                          ]
                      }     
                  />


                  {/* ------------------------ 10. Policy Updates ------------------------------------*/}
                  <SectionBlock
                      title={'10. Policy Updates'}
                      description={'Flow Wave reserves the right to update or modify this Privacy Policy at any time. Changes will be reflected on this page with a revised “Last Updated” date.We encourage you to review it periodically.'}
                  />


              </div>
          </Container>
      </>
  )
}

export default PrivacyPolicy