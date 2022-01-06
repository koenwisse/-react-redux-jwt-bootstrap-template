import { combineReducers } from "redux";
import appState from "./appState/spaceReducer";
import user from "./user/reducer";
import spaceReducer from "./appState/spaceReducer";

export default combineReducers({
  //write spaceReducer here because rootR needs to know that we have a child reducer
  spaces: spaceReducer,
  appState,
  user,
});
