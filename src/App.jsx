import React from 'react'
import Navbar from './componenets/Navbar/navbar'
import Hero from './componenets/Hero/Hero'
import About from './componenets/About/about'
import Service from './componenets/Services/Services'
import MyWork from './componenets/myWork/myWork'
import Contact from './componenets/contact/contact'
import Footer from './componenets/Footer/Fopter'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

