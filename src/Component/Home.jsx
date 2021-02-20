import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col } from "reactstrap";
import Navbar from "./Navbar";
import MediaCard from "./Card";

/*1: fetch data from backend
2: map the data in Card
3: use useffect */

export default function Home() {

  const [data, setData] = useState([]);

  const [search, setSearch] = useState('');
  
  

  const callback = (childData) => {
    setData(childData)
    console.log("Searched data :",search);
  }

  useEffect(() => {
    axios.get('http://localhost:5001/homepage')
    .then(response => {
      setData(response["data"].reverse())
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div>
      <Navbar parentCallback = {callback} />
      <div style={{display: "flex", flexDirection:"row", justifyContent: "center"}}>
        <Container>
          <Row>
            {data.map((dataItem, index) => {
              return (
                
                <MediaCard
                  key={index}
                  id={index}
                  title={dataItem.title}
                  image={dataItem.image[0]}
                  description={dataItem.description}
                />
              )
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}
