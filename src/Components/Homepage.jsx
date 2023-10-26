import React from 'react'
import './homepage.css'
import { useNavigate } from 'react-router-dom'
function Homepage() {
    const navigate= useNavigate();
    const handleClick=()=>{
        navigate("/parkingPage")
    }
  return (
    <section aria-labelledby='homeHeader' className='homeSection' >
    <h1 id='homeHeader'> Sky Spot </h1>
    <div className='dronesContainer'>
    <img className='droneimage1' src={require('../Assets/BlueDrone2.png')}/>
    <img className='droneimage2' src={require('../Assets/BlueDrone2.png')}/>
    </div>
    <div className='carimageContainer'>
    <img className='carimage' src={require('../Assets/Bluecar.png')}/>
    </div>
    <button type='button' className='continueButton' onClick={handleClick}> Check Availability  </button>
    </section>
  )
}

export default Homepage