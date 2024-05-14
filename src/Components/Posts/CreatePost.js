import React, { useEffect, useState } from "react";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../Redux/actions/user";
import { addPost, createPost } from "../../Redux/actions/post";


function CreatePost (props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentUser())
    },[dispatch])
    const user = useSelector((state) => state.userReducer.user);
    const [NewPost, setNewPost] = useState({
        Title : "", 
        Description : "",
        User : user._id,
        LinkImage : "",
    })
    const [ImageName , setImageName] = React.useState("");
    const [LinkImage , setLinkImage] = React.useState("");
    const [ImageState, setImageState] = React.useState("");

    const [progress, setProgress] = React.useState(0);
    React.useEffect (() => {    
    if(LinkImage !== "")
        setNewPost({...NewPost, LinkImage: LinkImage});
    }, [LinkImage])
    const handlePostChange = (e) => {
        setNewPost ({...NewPost , [e.target.name] : e.target.value });
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
    const createPost = () => {
        if(NewPost.Title !== "" && NewPost.Description !== "" && NewPost.LinkImage !== "" )
            dispatch(addPost(NewPost));
        else
            alert("Please fill all the fields")
    } 
    const result = useSelector((state) => state.postReducer.newPost);
    useEffect(() => {
        if(result.result === 0)
            {
                alert("Post added successfully !")
            }
    },[result])

    return (
        <div className="CreatePostBox">
            <div className="box">
                <h2>Create a post</h2>
                <form>
                    <div className="duo">
                        <input type="text" name="Title" onChange={handlePostChange}  placeholder="Write the title here"/>
                        <input type="file" onChange={handleImageUpload}  />
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
                    </div>
                    <textarea type="text" name="Description" onChange={handlePostChange}   rows={5} placeholder="Write the description here"/>
                    <button onClick={() => createPost()}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default CreatePost;