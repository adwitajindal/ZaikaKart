import { isPresentInFavorites } from "../../config/logic";
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, LOGIN_FAILURE, LOGIN_REQUEST, REGISTER_FAILURE, REGISTER_REQUEST } from "./ActionType"

const intialState={
    user:null,
    isLoading:false,
    error:null,
    jwt:null,
    favorites:[],
    success:null,
}
export const authReducer=(state=intialState,action)=>{
    switch(action.type){
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
    case ADD_TO_FAVORITE_REQUEST:
        return {...state, isLoading:true, error:null, success:null};
        
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
        return {...state,
            isLoading:false,
            jwt:action.payload,
            success:"Register success",
        }; 
    case ADD_TO_FAVORITE_SUCCESS:
        return {...state,
            isLoading:false,
            error:null,
            favorites:isPresentInFavorites(state.favorites, action.payload)
            ?state.favorites.filter((item)=>item.id!==action.payload.id)
            :[action.payload,...state.favorites]
        }
    
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
    case ADD_TO_FAVORITE_FAILURE:
        return {...state, isLoading:false, error:action.payload, success:null};

    default:
        return state;
    }
}
export default authReducer