import { DEFAULT_MESSAGE_TIMEOUT } from "../../config/constants";
import axios from "axios";
export const APP_LOADING = "APP_LOADING";
export const APP_DONE_LOADING = "APP_DONE_LOADING";
export const SET_MESSAGE = "SET_MESSAGE";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";
// F1.3. export the const that goes to the reducer -> does reducer care about this action? (event handler)
export const SPACES_LOADED = "SPACES_LOADED";

export const appLoading = () => ({ type: APP_LOADING });
export const appDoneLoading = () => ({ type: APP_DONE_LOADING });
export const clearMessage = () => ({ type: CLEAR_MESSAGE });

export const setMessage = (variant, dismissable, text) => {
  return {
    type: SET_MESSAGE,
    payload: {
      variant,
      dismissable,
      text,
    },
  };
};

export const showMessageWithTimeout = (
  variant,
  dismissable,
  text,
  timeOutMilliSeconds
) => {
  return (dispatch) => {
    dispatch(setMessage(variant, dismissable, text));

    const timeout = timeOutMilliSeconds || DEFAULT_MESSAGE_TIMEOUT;

    setTimeout(() => dispatch(clearMessage()), timeout);
  };
};

//F1.2. write an action creator
export default function spacesLoaded(Spaces) {
  return {
    // action:
    // type is a string, goes to reducer
    // payload is spaces that you defined in your backend/router/endpoint as a const
    type: SPACES_LOADED,
    payload: Spaces,
  };
}
// "Thunk action creator" returns async function
export function fetchSpaces() {
  //F1.1. Write an async function in action (thunk) and make axios request
  // its a "thunk funtion" (Middleware) so we need to pass 2 params
  // p1=dispatch: dispatch actions to the reducer (from redux lib)
  // p2=getState: to get data from redux state
  return async function fetchSpacesThunk(dispatch, getState) {
    const response = await axios.get("http://localhost:4000/spaces");
    console.log("response", response);
    // dispatch action returned by "action creater"
    dispatch(spacesLoaded(response.data.Spaces));
  };
}
