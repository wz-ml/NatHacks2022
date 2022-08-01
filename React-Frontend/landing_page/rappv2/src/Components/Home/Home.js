import React from 'react'
import { auth } from '../firebase'
import Navbar from "../Navbar/Navbar";
import UserFlow from "./UserFlow"
import "./Home.css"


const Home = () => {
    return (
        <div>
                <Navbar/>

        <div style={{display:"flex", flexDirection: "row", alignContent: "center"}}>
        <div style={{marginTop:"10%", marginLeft:"10%" }}>
        <div className="typewriter">
        <h1 style={{fontFamily:"Ubuntu", fontSize:"40px" ,}} >Welcome, User! </h1>

        </div>
        <p style={{color: "grey", fontSize:"12px", fontWeight:"bold"}}>Earn Reward Points for Watching Videos!</p>

        </div>
        <img src={require("./welcome.png")} style={{height:"25rem", position:"relative", left:"25%"}}/>

        </div>
        <UserFlow />
        </div>
    )
}

export default Home
