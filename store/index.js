import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/auth.reducers.js"


const RootReducer = combineReducers({
    auth: AuthReducer
})

export default createStore(RootReducer, applyMiddleware(thunk));
