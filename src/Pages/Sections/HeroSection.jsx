import { Typography } from '@material-tailwind/react'
import React, { Fragment } from 'react'

export const HeroSection = () => {
  return (
    <Fragment>
        <div className="h-full py-12 lg:h-[100vh] bg-[url('/images/libraries-bg.png')] lg:bg-[url('/images/hero-bg.png')] bg-no-repeat bg-cover flex flex-col justify-start pt-12 items-center">
        <img src="/images/nvsulogo.png" alt="nvsu logo" />
        <Typography className="text-[48px] sm:text-[32px] lg:text-[96px] lg:leading-[100px] font-extrabold text-green lg:text-white">IViLib</Typography>
        <Typography className="text-[24px] font-medium lg:text-white text-green">Ideal Virtual Library</Typography>
        <img src="/images/books.jpg" alt="books" className='rounded-xl mt-12 w-[400px] lg:w-auto mb-12 lg:mb-0' />
        </div>
    </Fragment>
  )
}
