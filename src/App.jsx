import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import React from "react";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import DigitalProduct from "./components/DigitalProduct.jsx";
import OnlineMode from "./components/OnlineMode.jsx";
import ExpertPannel from "./components/ExpertPannel.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <>

        <Navbar />
        <Hero />
        <Services />
        <DigitalProduct />
        <OnlineMode />
        <Testimonial />
        <ExpertPannel />
        <Contact />
        <Footer />

    </>
  );
}

export default App;
