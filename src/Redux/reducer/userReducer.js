import { 
    CURRENT_USER,
    LOGIN_USER, 
    LOGOUT_USER, 
    REGISTER_USER,
    GET_USERS,
    DELETE_USER,
    ADD_USER,
    FAIL_USER,
    CURRENT_USER_Fail
      } from '../actionsType/user';
const initialState = {
    users:[],
    user: {},
    newUser : {},
    userLogin: {},
    errors: [],
    isAuth: false,
    failLogin : {},
    load: false,
  };

  const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOGIN_USER:
        return { 
          ...state , 
          userLogin : payload 
        };
      case FAIL_USER: 
      return {
        ...state , 
        failLogin: payload
      };
      case REGISTER_USER:
        localStorage.setItem('token', payload.token);
        return { ...state , newUser : payload };
      case ADD_USER:
        return { ...state , result : payload };
      case CURRENT_USER:
        return { ...state, user: payload.user, isAuth: payload.isAuth };
      case CURRENT_USER_Fail : 
      return {...state, user : null , isAuth: false}
      case LOGOUT_USER:
        localStorage.removeItem('token');
        return { ...state, user: {}, isAuth: false };
      case GET_USERS:
        return {
          ...state,
          users: payload,
        };
      case DELETE_USER:
        return {
          ...state, result: payload 
        }
      default:
        return state;
    }
  };
export default userReducer;