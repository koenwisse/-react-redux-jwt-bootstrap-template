import { FETCH_SPACES_SUCCESS } from "./actions";
import { SPACE_DETAILS_FETCHED } from "./actions";

const initialState = {
  // allSpaces is an array of space object
  allSpaces: [],
};
// state, only when store first instantiated (made) than state has value initialstate
// initialState is default value
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    // case: does reducer care about case?
    case FETCH_SPACES_SUCCESS:
      // if yes, updated state is returned
      // new object
      return {
        ...state, // copy of state from reducer, if there is no state then it is initial state
        // The property "Spaces" of the state object (= the state of the spaces reducer) is updated
        //with the value of the "payload" property from the "action" object.
        // array gets the current state value and the action payload is added to that
        allSpaces: [...state.allSpaces, ...action.payload],
      };
    case SPACE_DETAILS_FETCHED:
      return { ...state, spaceDetails: { ...action.payload } };

    default:
      return state;
  }
};
