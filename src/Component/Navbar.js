import React from "react";
import "../App.css";
import SearchBar from "material-ui-search-bar";
import olx from "../Assets/301322.svg"

const onSearch = (value) => {
    console.log("The value is :", value);
}

function Navbar() {
    return <div className="Navbar">
        <div className="logo">
            <img src={olx} alt="olx" href="/" />
        </div>
        <div className="searchBar">
            <SearchBar
                onRequestSearch={(value) => onSearch(value)}
                style={{
                    backgroundColor: '#CFCFCF',
                    borderRadius: "10px",
                    margin: "0 auto",
                    width: "90%",
                    height: "50%",
                }}
            />
        </div>
        <div className="userManagement">
            <div className="links">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <button href="/sell">
                    SELL
                </button>
            </div>
        </div>
    </div>
}

export default Navbar;