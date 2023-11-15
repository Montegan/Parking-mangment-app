import React, { useEffect, useState } from "react";
import axios from "axios";
import "./parkingmain.css";
function Parkingmain() {
  const [availablecars, setAvailablecars] = useState([]);


  // useEffect(()=>{
  //    axios
  //     .get("http://localhost:4000/reservaions")
  //     .then((res) => setAvailablecars(res.data[res.data.length - 1]))
  //     .catch((err) => console.log(err))}
  // , []);

  setTimeout(
    () =>
    axios
        .get("https://parkingbackend-qesh.onrender.com/reservaions")
        .then((res) => setAvailablecars(res.data[res.data.length - 130]))
        .catch((err) => console.log(err)),
    1000
    );

    const Parkvalues = Object.values(availablecars);
    const keys = Object.keys(availablecars);

  if (keys.length === 13){
    axios.delete("https://parkingbackend-qesh.onrender.com/deletefirst")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    })};

  // setTimeout(
  //   () =>
  //   axios
  //   .delete('http://localhost:4000/delete-first')
  //   .then((response) => {
  //     console.log(response.data.message);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   }),
  //   20000
  // );

  console.log(keys.length);
  console.log(Parkvalues);
  console.log(keys);

  const Temp = [
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9"
  ];
  return (
    <div className="parkingpage">
      <h1 id="parkingHeader"> Parking Space Overview </h1>
      <ul className="parkingSpotsContanier">
        {Parkvalues.length === 0 ? Temp.map((nums)=> <li key= {nums} className= "freeparkingspotrender" ></li>)
         : (
          Parkvalues.map((vals, idx) => {
            if (vals === 0 || vals === 1) {
              return (
                <div className="parkingDots">
                <li
                  className={vals === 0 ? `freeparkingspot${idx}` : `occupiedSpace${idx}` }
                  key={idx}
                >
                  {vals === 0 ? (
                    idx
                  ) : (
                    <img
                      className="occupiedImg"
                      src={require("../Assets/Bluecar.png")}
                    />
                  ) }
                </li></div>
              );
            }
          })
        )}
      </ul>
    </div>
  );
}

export default Parkingmain;
