import React, { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import Info from '../components/Info'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/Info/Data';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      
      <Hero />
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      
      <Info {...homeObjThree}/>
      <Footer />
    </>
  );
};

export default Home;
