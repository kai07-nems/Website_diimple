import React from 'react'
import './Home.css'
import homeimage from '../images/homeimage.jpg'

const Home=() =>{
  return (
    <div className= "Home">
      <h2>"CREATIVITY TAKES COURAGE"</h2>
      <br/>

        <img src={homeimage} alt= "Home"  className= "main-image"/>
        <br/>
        <br/>

      <h2>TAKING PICTURES IS SAVORING LIFE INTENSELY,
        EVERY HUNDREDTH OF A SECOND PHOTOGRAPHY IS A 
        PICTURE PAINTED BY THE SUN WITHOUT INSTRUCTION IN ART</h2>
        <br/>
        <h2>"CREATIVITY TAKES COURAGE"</h2>
    </div>
  )
}

export default Home;
