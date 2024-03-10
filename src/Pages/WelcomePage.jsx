import { Button, Typography } from "@material-tailwind/react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const WelcomePage = () => {
  return (
    <Fragment>
      <div className="bg-[url('/images/libraries-bg.png')] bg-cover bg-no-repeat text-center flex flex-col gap-6 p-4 items-center justify-center h-[100vh]">
        <img src="/images/nvsulogo.png" alt="nvsulogo"/>
        <Typography className="text-green font-bold text-5xl">Ideal Virtual Library</Typography>
        <Typography className="font-medium max-w-[1200px]">
          Welcome to Ideal Virtual Library <span className="text-green ">(IViLib)</span>, a digital haven dedicated
          to unraveling the fascinating mysteries of heredity, inheritance, and
          variation. Whether you're a student, educator, or simply an enthusiast
          of the biological wonders that shape our existence, our virtual
          shelves are stocked with a diverse array of articles, interactive
          simulations, videos, and more! Embrace the endless possibilities
          within our digital repository and embark on a journey of intellectual
          enrichment. Welcome to a realm where learning knows no bounds!
        </Typography>
        <Link to="/HomePage"><Button className="bg-green text-white font-bold">Browse Virtual Library</Button></Link>
        <img src="\images\books.jpg" alt="books" className='rounded-xl w-[400px] lg:w-auto' />
      </div>
    </Fragment>
  );
};
