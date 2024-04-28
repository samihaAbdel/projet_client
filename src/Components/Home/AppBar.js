import React, { useState } from "react";
import './AppBar.css';

function AppBar(props) {
    const [shownotification, setShownotification] = useState(false);
    const [showprofile, setShowprofile] = useState(false);

    const handelenotification = () => {
        setShownotification(!shownotification);
    }
    const handeleprofile = () => {
        setShowprofile(!showprofile)
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1713218520/logo_yzyimd.png" alt="logophoto" />
            </div>
            <div className="bar">
                <ul>
                    <li><a href="/home">Home</a> </li>
                    <li><a href="/about">About</a> </li>
                    <li><a href="/service">Services</a> </li>
                    <li><a href="/contact">Contact</a> </li>
                </ul>
            </div>
            <button >Get Started</button>
            {/* <div className="profile-container" >
                <div className="notification-container" onClick={handelenotification}>
                    <div className="icon">
                        <ion-icon name="notifications-circle-outline"></ion-icon>
                    </div>
                    {shownotification === true ?
                        <div className="NotificationDropdown">
                            {
                                props.User.notifications.map((notification) =>
                                    <span>{notification}</span>
                                )
                            }
                        </div> : null}
                </div>
                <div className="prof-container">
                    <div className="profile" onClick={handeleprofile}>
                        <img src={props.User.image} alt="" />
                    </div>
                    {showprofile === true ?
                        <div className="notification-profile" >
                            <span>My Profile</span>
                            <span>Settings</span>
                            <span>Logout</span>
                        </div> : null}
                </div>
            </div> */}
        </nav>

    )
}
export default AppBar;