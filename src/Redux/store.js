import{createStore} from "redux";
import { CombineReducer } from "./combineReducer";

export const store = createStore(
    CombineReducer
)