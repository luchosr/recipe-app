import { combineReducers } from "redux";
import recipeReducer from "./reducer";

const rootReducer = combineReducers({
  data: recipeReducer,
});

export default rootReducer;
