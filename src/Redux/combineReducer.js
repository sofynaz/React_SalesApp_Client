import{combineReducers} from "redux";
import { userReducer } from "./userReducer";

export const CombineReducer =combineReducers({userReducer:userReducer})