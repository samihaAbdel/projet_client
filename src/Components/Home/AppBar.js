import React, { useState } from "react";
import './AppBar.css';
import { useNavigate } from "react-router-dom";

function AppBar(props) {
    const [shownotification, setShownotification] = useState(false);
    const [showprofile, setShowprofile] = useState(false);
    const navigate = useNavigate();

    const handelenotification = () => {
        setShownotification(!shownotification);
    }
    const handeleprofile = () => {
        setShowprofile(!showprofile)
    }
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload();
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1715532896/logo-removebg_lobgmh.png" alt="logophoto" />
            </div>
            <div className="bar">
                <ul>
                    <li><a href="/home">Home</a> </li>
                    <li><a href="/about">About</a> </li>
                    <li><a href="/service">Services</a> </li>
                </ul>
            </div>
            {!props.IsAuth ?  <button onClick={() => props.handleIsShowPopup()} className="GetStarted" >Get Started</button> :
            <div className="profile-container" >
                
                <div className="prof-container">
                    <div className="profile" onClick={handeleprofile}>
                        <img src={props.User.LinkImage} alt="No " />
                    </div>
                    {showprofile === true ?
                        <div className="notification-profile" >
                            <span>My Profile</span>
                            <span onClick={() =>  navigate("/createPost")}>Create post</span>
                            <span onClick={() =>  handleLogout()}>Logout</span>
                        </div> : null}
                </div>
            </div>}
        </nav>

    )
}
export default AppBar;