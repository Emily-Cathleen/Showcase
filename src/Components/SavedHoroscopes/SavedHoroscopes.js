import React from "react"
import { NavLink } from "react-router-dom";
import SingleHoroscope from "../SingleHoroscope/SingleHoroscope";
import SavedCard from "./SavedCard";

const SavedHoroscopes = ({ favorites }) => {
const sortedHoroscopes = favorites.map(favorite => <SavedCard userHoroscope={favorite} key={favorite.sign} />)
  return(
    <section>
    {sortedHoroscopes}
    </section>
  )
}

export default SavedHoroscopes