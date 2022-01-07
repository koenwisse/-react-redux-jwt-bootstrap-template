import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import spaces from "./spaces/reducer";

export default combineReducers({
  appState,
  user,
  //write spaceReducer here because rootR needs to know that we have a child reducer
  spaces,
});
