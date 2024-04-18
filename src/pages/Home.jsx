import React from 'react';
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";


const Home = () => {
  return (
    <>
      <Hero
      title={"Welcome to YouHeal Medical Institute | Your trusted Health Center"}

      imageUrl={"/hero.png"}
      />
        
      
      <Biography imageUrl={"/about.png"}/>
      <Departments/>
      <MessageForm/>
      
    </>
  );
};

export default Home;


// asdasdfasd