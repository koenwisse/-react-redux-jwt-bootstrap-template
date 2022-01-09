import { apiUrl } from "../../config/constants";
import axios from "axios";
// F1.3. export the const that goes to the reducer -> does reducer care about this action? (event handler)
export const FETCH_SPACES_SUCCESS = "FETCH_SPACES_SUCCESS";
export const SPACE_DETAILS_FETCHED = "SPACE_DETAILS_FETCHED";
// F1. Action for spaces
export const fetchSpacesSuccess = (spaces) => ({
  type: FETCH_SPACES_SUCCESS,
  payload: spaces,
});

// F2. Action for fetch spaces by ID
const spaceDetailsFetched = (space) => ({
  // In capitals is var that we use in reducer to see if reducer cares about that case
  type: SPACE_DETAILS_FETCHED,
  payload: space,
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
      const response = await axios.get(`${apiUrl}/spaces/`);
      console.log("response", response);
      // F1. dispatch action returned by "action creater"
      // fetchSpacesSuccess wants an array so you need an array from your DB/backend
      // it is response.data.Spaces, because if you only do res.data you get the object
      dispatch(fetchSpacesSuccess(response.data.Spaces));
    } catch (e) {
      console.log("error from line 28 actions", e.message);
    }
  };
};

// F2. Get space with stories by ID
// we have function that depends on param id, because data that we fetch depends on the id of the space
// we we write a function that returns a function. To the outside function we pass our param, to the inside function we pass our thunk
// stick to function with inside function as that never goes wrong
export const fetchSpaceById = (id) => {
  // F2. Return Thunk
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/spaces/${id}`);
      // clg response to check if data is coming through, for this we clg AND need to call the function to see if we actually get something back.
      // we call it inside the component/page
      console.log("response in action", response);
      dispatch(spaceDetailsFetched(response.data.Space));
    } catch (e) {
      console.log("error from line 53 actions", e);
    }
  };
};

// 1. its two function because of the thunk
// 2. we have an API call in this function
// 3. Instead of asserting on a return, we have to do so on a function call (dispatch).
