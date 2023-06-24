import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as Authreducer } from "../Redux/AuthReducer/reducer"

const rootReducer = combineReducers({
  Authreducer

});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));