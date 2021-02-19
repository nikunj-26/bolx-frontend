import React from "react";
import "../App.css";
import SearchBar from "material-ui-search-bar";
import olx from "../Assets/301322.svg";
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { logoutUser } from "../redux/user/userActions";

const onSearch = (value) => {
  console.log("The value is :", value);
};

function Navbar(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  let navbar;
  if (!props.isAuthenticated) {
    navbar = (
      <div className="links">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <button
          onClick={() => {
            history.push("/sell");
          }}
        >
          SELL
        </button>
      </div>
    );
  } else {
    navbar = (
      <div className="links">
        <a href="/">Posts</a>
        <a
          onClick={() => {
            dispatch(logoutUser());
          }}
          href="/login"
        >
          Logout
        </a>
        <button
          onClick={() => {
            history.push("/sell");
          }}
        >
          SELL
        </button>
      </div>
    );
  }
  return (
    <div className="Navbar">
      <div className="logo">
        <a href="/">
          <img
            src={olx}
            alt="olx"
            href="/"
            // onClick={() => {
            //   history.push("/");
            // }}
          />
        </a>
      </div>
      <div className="searchBar">
        <SearchBar
          onRequestSearch={(value) => onSearch(value)}
          style={{
            backgroundColor: "#CFCFCF",
            borderRadius: "10px",
            margin: "0 auto",
            width: "90%",
            height: "50%",
          }}
        />
      </div>
      <div className="userManagement">{navbar}</div>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStatetoProps)(Navbar);
