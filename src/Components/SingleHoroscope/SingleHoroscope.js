import React from "react"
import { NavLink } from "react-router-dom";
import "./SingleHoroscope.css";
import Header from "../Header/Header";


const SingleHoroscope = ( { userHoroscope, saveHoroscope } ) => {

  return(
    <div className="single-horoscope-container">
    <div className="greeting"> {`Your sign is ${userHoroscope.sign}, happy shrooming! `} </div>
      <img className="mushroom-image" src={userHoroscope.img_url} alt="mushroom picture"/>
      <div className="horoscope-details-container">
        <div className="sign">
          {userHoroscope.sign}
        </div>
        <div className="mushroom-name">
          {userHoroscope.name}
        </div>
        <button className="favorite-button" onClick={() => {saveHoroscope(userHoroscope)}}>SAVE</button>
      </div>
    </div>
  )
}

export default SingleHoroscope
