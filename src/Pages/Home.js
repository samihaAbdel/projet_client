import React from "react";
import AppBar from "../Components/Home/AppBar";
import { Outlet } from "react-router-dom";

function Home(props) {

    return (
        <div className="HomePage">
            <AppBar User={props.User} />
            <Outlet />

        </div>
    )

}
export default Home;