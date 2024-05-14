import React, { useEffect, useState } from "react";
import "./Auth.css"
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../Redux/actions/user";

function Auth (props) {
    const dispatch = useDispatch();
    const [IsLogin, setIsLogin] = useState(true);
    const handleClick = () => {
        setIsLogin(!IsLogin);
    }
    const [LoginObj , setLoginObj] = useState({
        email : "",
        password : ""
    })
    const handleLoginChange = (e) => {
        setLoginObj ({...LoginObj , [e.target.name] : e.target.value });
    }
    const Login = () => {
        if (LoginObj.email !== "" && LoginObj.password !== "")
            {
                dispatch(login(LoginObj));
            }else {
                alert("Fill all the fields please !")
            }
    }
    const LoginResult = useSelector((state) => state.userReducer.userLogin);
    const failLogin = useSelector((state) => state.userReducer.failLogin);
    
    useEffect(() => {
        console.log(LoginResult)
        console.log(failLogin)
        if(LoginResult && LoginResult.status === "200")
            {
                window.location.reload();
            }
            else  if(failLogin && failLogin.status === 401)
            {
                
                alert("Bad credentials")
            }
    },[LoginResult , failLogin]);



    const [ImageName , setImageName] = React.useState("");
    const [LinkImage , setLinkImage] = React.useState("");
    const [ImageState, setImageState] = React.useState("");
    const [progress, setProgress] = React.useState(0);
    const [SignUpObj , setSignUpObj] = useState({
        firstname : "",
        lastname : "",
        email : "",
        password : "",
        LinkImage : "",
    })
    React.useEffect (() => {    
    if(LinkImage !== "")
        setSignUpObj({...SignUpObj, LinkImage: LinkImage});
    }, [LinkImage])
    const handleSignUpChange = (e) => {
        setSignUpObj ({...SignUpObj , [e.target.name] : e.target.value });
    }
    const handleImageUpload = (e) => {
        e.preventDefault();
        setImageState("uploading")
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('upload_preset', 'Blog_Internship'); 
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.cloudinary.com/v1_1/turkiskander/image/upload', true);
        xhr.upload.onprogress = (event) => {
            const percent = Math.round((event.loaded / event.total) * 100);
            setProgress(percent);
        };
        xhr.onload = () => {
            if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            setImageName(data.original_filename)
            setLinkImage(data.url);
            setImageState("uploaded");
            } else {
            console.error('Error uploading video:', xhr.statusText);
            }
        };

        xhr.onerror = () => {
            console.error('Network error occurred while uploading');
        };

        xhr.send(formData);

    }
    const SignUp = () => {
        if (SignUp.firstname !== "" && SignUp.lastname !== "" && SignUp.email !== "" && SignUp.password !== "" && SignUp.LinkImage !== "" )
            {
            dispatch(register(SignUpObj));}
        else
            alert("please fill all the fields")
    }
    const SignUpResult = useSelector((state) => state.userReducer.newUser);
    useEffect(() => {
        if(SignUpResult && SignUpResult.status === "200")
            {
                window.location.reload();
            }
            else  if(SignUpResult && SignUpResult.status === 400)
            {
                
                alert("Bad Data")
            }
    },[SignUpResult]);

    return(
        <>
        { props.IsShowPopup ?
            <div className="AuthPopUp">
            <div className="AuthBox">
                <header>
                    <h2>{IsLogin? "SignIn" : "SignUp"}</h2>
                    <span onClick={() => props.handleIsShowPopup()}><ion-icon name="close-outline"></ion-icon></span>
                </header>
                {IsLogin?
                <div className="Login">
                    <input name="email" onChange={handleLoginChange} type="text"  placeholder="Enter you mail here"/>
                    <input name="password" onChange={handleLoginChange} type="password" placeholder="Enter your password here"/>
                    <span>I f you dont have an account <span onClick={() => handleClick()} className="Click">Create One</span></span>
                    <button onClick={Login}>Sign In</button>
                </div>: 
                <div className="SignUp">
                    <input name="firstname" onChange={handleSignUpChange} type="text"  placeholder="Enter you firstname here"/>
                    <input name="lastname" onChange={handleSignUpChange} type="text"  placeholder="Enter you lastname here"/>
                    <input name="email" onChange={handleSignUpChange} type="text"  placeholder="Enter you email here"/>
                    <input name="password" onChange={handleSignUpChange} type="password"  placeholder="Enter you password here"/>
                    <input name="LinkImage" onChange={handleImageUpload} type="file"  placeholder="Upload your image here "/>
                    {ImageState === "uploading" ?
                    <section className='progress-area'>
                        <li className='row-input'>
                            <ion-icon name="document"></ion-icon>
                            <div className='content'>
                                <div className='detail'>
                                    <span className='name'>Uploading</span>
                                    <span className='percent'>{progress}%</span>
                                </div>
                                <div className='progress-bar'>
                                    <div 
                                        className='progress' 
                                        style={{
                                            width: `${progress}%`,
                                          }}
                                        ></div>
                                </div>
                            </div>
                        </li>
                    </section>:
                    ImageState === "uploaded" ?    
                    <section className='uploaded-area'>
                        <li className='row-input'>
                            <div className='content'>
                                <ion-icon name="document"></ion-icon>
                                <div className='detail'>
                                    <span className='name'>{ImageName} .Uploaded</span>
                                </div>
                            </div>
                            <ion-icon name="checkmark-done"></ion-icon>
                        </li>
                    </section> : 
                    null}
                    <button onClick={SignUp}>{IsLogin? "SignIn" : "SignUp"}</button>
                </div>
                }
            </div>
        </div> : null}
        </>
    )
}
export default Auth;