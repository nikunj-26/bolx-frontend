import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './FullDetails.css';
import {useLocation} from 'react-router-dom';

export default function FullDetails(props) {
    const [id, setId] = useState("")
    const [state, setState] = useState([]);
    
        /*{
          "_id": "1",
          "title": "Nike Shoes",
          "image": [
              "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
              "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
              "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
              "https://www.upsieutoc.com/images/2020/06/27/img4.jpg"
            ],
          "description": "UI/UX designing, html css tutorials",
          "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
          "price": 23,
          "colors":["red","black","crimson","teal"],
          "count": 1
        }*/

    //console.log(props.location.search.slice(1));
    const location = useLocation();
    useEffect(() => {
      const tid = location.search.slice(1);
      setId(decodeURI(tid));
      const productId = {
        productID: id
      }
      console.log(id);

      axios({
        method: "post",
        url: "http://localhost:5002/getFullProduct",
        data: productId,
        headers: { "Content-Type": "application/json" },
      })  
      .then(res => {
        console.log(res.data.sellerName);
        let temp = [];
        temp.push(res.data)
        setState(temp);
      }).catch(err => {
        console.log(err);
      })
    },[location, id])

    /*useEffect(() => {
      const t_id = props.location.search.slice(1);
      setId(decodeURI(t_id));
      console.log(id);
      const jid = {
        _id: id
      };

      axios({
        method: "post",
        url: "http://localhost:5001/getFullProduct",
        data: jid,
        headers: { "Content-Type": "application/json" },
      })
      .then(res => {
        //console.log(res);
      })

    })*/


    return(
      <div>
      <Navbar />
        <div className="app">
          {
            state.map((item, index)=>(
              <div className="details" key={index}>
              <div className="big-img">
                <Carousel>
                    {item["image"].map((value, ind) => {
                        return <img key={ind} src={"http://localhost:5000/images/"+value} alt=""/>
                        })
                    }
                </Carousel>
              </div>
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>Rs.{item.price}</span>
                </div>
                <p>{item.sellerName}</p>
                <p>{item.description}</p>
                <button className="cart">Add to cart</button>
              </div>
            </div>
            ))        
        }
          
      </div>
      </div>
    );
}