import { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { WelcomePage } from "./Pages/WelcomePage";


const App = () => {
  

  return (
    <Fragment>
    <Routes>
      <Route exact path="/" element={<WelcomePage />} />
      <Route exact path="/HomePage" element={<HomePage />} />
    </Routes>
  </Fragment>
  );
};

export default App;