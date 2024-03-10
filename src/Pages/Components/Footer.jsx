import { Typography } from '@material-tailwind/react'
import React from 'react'

export const Footer = () => {
  return (
    <div className='lg:py-16 py-4 flex justify-center flex-col items-center border-t-light-gray border-t'>
        <img src="/images/nvsulogo.png" alt="nvsulogo" />
        <Typography className="text-[48px] sm:text-[32px] lg:text-[96px] lg:leading-[100px] font-extrabold text-green">IViLib</Typography>
    </div>
  )
}
