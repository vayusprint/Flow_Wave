import React from 'react'
import SubHeaderSection from '../components/SubHeaderSection'
import SubheadBg from '../assets/images/subheadbg-product.png'
import Container from '../components/Container'

const TermAndCondition = () => {
  return (
      <>
      <SubHeaderSection alt={'product sub head image'} src={SubheadBg} />
      <Container>
        <div className='flex justify-between'>
          <p>hello</p>
          <p>hello</p>
        </div>
      </Container>
      </>
  )
}

export default TermAndCondition