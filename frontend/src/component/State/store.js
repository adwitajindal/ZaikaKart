import authReducer from "./Authentication/Reducer";

const rooteReducer=combineReducers({
    auth:authReducer,
})
export const store=legacy_createstore(rooteReducer,applyMiddleware(thunk));