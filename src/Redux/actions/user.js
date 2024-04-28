import axios from "axios";
import { CURRENT_USER, FAIL_USER, GET_USERS, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actionsType/user";

export const currentUser = () => async (dispatch) => {
    try {
      const options = {
        headers: { authorization: localStorage.getItem('token') },
      };
      const result = await axios.get('http://localhost:5000/users/current', options);
      dispatch({ type: CURRENT_USER, payload: result.data });
    } catch (error) {
      dispatch({ type: CURRENT_USER, payload: error.response.data });
    }
  };
  export const login = (user) => async (dispatch) => {
    axios.post('http://localhost:5000/users/Login', user).then((result) => {
      localStorage.setItem('token', result.data.token);
      dispatch({ type: LOGIN_USER, payload: result.data });  
    }).catch((error)=> {
      dispatch({ 
        type: FAIL_USER, payload: error.response});
    })
  
  };
  export const register = (user) => async (dispatch) => {
      axios.post('http://localhost:5000/users/register', user).then((result) => { 
        dispatch({ type: REGISTER_USER, payload: result.data }); 
      }).catch((error) => { 
        console.log(error)
      dispatch({ type: REGISTER_USER, payload: error });
      })
  };
  
export const logout = () => ({
    type: LOGOUT_USER,
  });
  export const GetAllUsers = () => (dispatch) => {
    axios.get("http://localhost:5000/users/getUsers").then(
      (result) => {
        dispatch({type: GET_USERS, payload: result.data.Users});
      }
    ).catch( (error) => {
      dispatch({ type: GET_USERS, payload: error.response.data.errors });
    })
  }