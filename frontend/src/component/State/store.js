import { authReducer } from "./Authentication/Reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Restaurant/Reducer";
import menuReducer from "./Menu/Reducer";
import { orderReducer } from "./Order/Reducer";
import cartReducer from "./Cart/Reducer";
import restaurantsOrderReducer from "./Restaurant Order/Reducer";
import { ingredientReducer } from "./Ingredients/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  restaurant:restaurantReducer,
  menu:menuReducer,
  cart:cartReducer,
  order:orderReducer,
  restaurantOrder:restaurantsOrderReducer,
  ingredients:ingredientReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
