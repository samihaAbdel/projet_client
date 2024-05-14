import { CREATE_POST, FAIL, GET_POST, GET_POSTS } from "../actionsType/post";

const initialState = {
    posts:[],
    post: {},
    newPost : {},
    err : false,
    errors: [],
};
const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_POST:
            return {
                ...state ,
                newPost : payload,
            };
        case GET_POST:
            return {
                ...state,
                post : payload,
                err : false
            };
        case GET_POSTS:
            return {
                ...state,
                posts : payload,
                
            }
        case FAIL : 
        return {
            ...state,
            err : true
        }
        default:
            return state;
    }
}
export default postReducer;
