import React, { Fragment } from 'react'
import { HeroSection } from './Sections/HeroSection'
import { Libraries } from './Sections/Libraries'
import { Footer } from './Components/Footer'

export const HomePage = () => {
  return (
    <Fragment>
        <HeroSection/>
        <Libraries/>
        <Footer/>
    </Fragment>
  )
}
