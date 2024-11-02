import React from "react";
import Footer from "../inc/footer";
function About() {
  return (
    <>
      <div className='about'>
        <h1>About us</h1>
        <p>Lorem Ipsum has evolved as a filler text for prototyping in the English language.
         As it is written in a Latin looking language that has no meaning, it does not distract from 
         analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not
          be sufficient when building software applications.

Most databases, text processing functions and data transfer protocols default to the English alphabet. 
Testing software applications with only English looking text, like Lorem Ipsum, may not reveal potential
 mismatches between different parts of the application or ensure that the font can display all necessary
  characters. Additionally, in today's globalized world, it is likely that your application will be used 
  by people from different countries and languages. 
</p>
      </div>
      {/* <Footer></Footer> */}
    </>
    
  );
}

export default About;