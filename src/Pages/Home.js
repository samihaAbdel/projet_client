import React, { useEffect, useState } from "react";
import AppBar from "../Components/Home/AppBar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../Redux/actions/user";
import Auth from "../Components/Home/Auth";

function Home(props) {
    const [IsShowPopup , setIsShowPopup] = useState(false);
    const handleIsShowPopup = () => {
        setIsShowPopup(!IsShowPopup);
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentUser())
    },[dispatch])
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const user = useSelector((state) => state.userReducer.user);

    return (
        <div className="HomePage">
            <AppBar User={user}  IsAuth={isAuth} handleIsShowPopup={handleIsShowPopup}/>
            <Auth handleIsShowPopup={handleIsShowPopup} IsShowPopup={IsShowPopup}></Auth>
            <Outlet />
        </div>
    )

}
export default Home;