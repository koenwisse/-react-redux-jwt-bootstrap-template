import axios from "axios";
// F1.3. export the const that goes to the reducer -> does reducer care about this action? (event handler)
export const FETCH_SPACES_SUCCESS = "FETCH_SPACES_SUCCESS";

export const fetchSpacesSuccess = (spaces) => ({
  type: FETCH_SPACES_SUCCESS,
  payload: spaces,
});

// "Thunk action creator" returns async function
export const fetchSpaces = () => {
  //F1.1. Write an async function in action (thunk) and make axios request
  // its a "thunk funtion" (Middleware) so we need to pass 2 params
  // p1=dispatch: dispatch actions to the reducer (from redux lib)
  // p2=getState: to get data from redux state
  return async (dispatch, getState) => {
    try {
      // use axios to call endpoint in backend
      const response = await axios.get("http://localhost:4000/spaces");
      console.log("response", response);
      // F1. dispatch action returned by "action creater"
      // fetchSpacesSuccess wants an array so if you need an array from your DB/backend,
      // it is response.data.Spaces, because if you only do res.data you get the object
      dispatch(fetchSpacesSuccess(response.data.Spaces));
    } catch (e) {
      console.log(e.message);
    }
  };
};

// 1. its two function because of the thunk
// 2. we have an API call in this function
// 3. Instead of asserting on a return, we have to do so on a function call (dispatch).
