import axios from "axios";
import { CREATE_POST, FAIL, GET_POSTS } from "../actionsType/post";

export const getAllPosts = () => async (dispatch) => {
    
        await axios.get('http://localhost:5000/api/posts/GetPosts')
        .then((res) => {
            console.log(res.data)
            dispatch({type : GET_POSTS,  payload: res.data});
        }).catch(() => {
            dispatch({type:FAIL})
        })
   
}
export const addPost = (post) => async (dispatch) => {
    axios.post('http://localhost:5000/api/posts/CreatePost', post).then((result) => { 
      dispatch({ type: CREATE_POST, payload: result.data }); 
      console.log(post)
    }).catch((error) => { 
      console.log(error)
    dispatch({ type: FAIL });
    })
};
export const getPost = (id) => async (dispatch) => {
    
    const result = await axios.get(`http://localhost:5000/api/posts/GetOne/${id}`)
    .then(() => {
        dispatch({type : GET_POSTS,  payload: result.data});
    }).catch(() => {
        dispatch({type:FAIL})
    })
}
export const deletePost = (id) => async (dispatch) => {
    await axios.delete(`http://localhost:5000/api/posts/Delete/${id}`)
    .then(() => {
        dispatch({type : GET_POSTS});
    }).catch(() => {
        dispatch({type:FAIL})
    })
}