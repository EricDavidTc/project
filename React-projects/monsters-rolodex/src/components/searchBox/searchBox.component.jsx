import React from "react";
import './searchBox.styles.css'
export const Search = ({placeholder, handleChange}) => {
return <input type='search' placeholder={placeholder} onChange={handleChange} className="search"></input>
}