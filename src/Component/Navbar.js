import React, { useState } from "react";
import "../App.css";
import SearchBar from "material-ui-search-bar";
import olx from "../Assets/301322.svg";
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { logoutUser } from "../redux/user/userActions";
import { useSnackbar } from "material-ui-snackbar-provider";
import axios from "axios";


function Navbar(props) {

  const snackbar = useSnackbar();
  const [searchData, setSearchData] = useState([]);

  const onSearch = (value) => {
    console.log("The value is :", value);
    const values = {
      product_title: value,
    };
    axios({
      method: "post",
      url: "http://localhost:5001/getProduct",
      data: values,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        //handle success
        console.log(res.data);
        props.parentCallback(res.data);
        /*if (res.data.status === "Success") {
          setSearchData(res.data.snippets);
        } else {
          snackbar.showMessage(
            "No items found",
            "Try something different",
            () => {
              // history.push("/home");
              window.location.reload();
            }
          );
        }*/
      })
      .catch(function (err) {
        //handle error
        console.log(err);
      });
  };

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
