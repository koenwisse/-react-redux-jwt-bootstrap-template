import {
  SPACES_LOADED,
  APP_LOADING,
  APP_DONE_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "./actions";

const initialState = {
  loading: false,
  message: null,
  Spaces: [],
};

export default function spaceReducer(state = initialState, action) {
  switch (action.type) {
    // case: does reducer care about case?

    case SPACES_LOADED:
      // if yes, updated state is returned
      return {
        ...state, // copy of state
        loading: false,
        // The property "Spaces" of the state object (= the state of the spaceReducer) is updated with the value of the "payload" property from the "action" object.
        Spaces: action.payload,
      }; // update of the new value

    case APP_LOADING:
      // if yes, updated state is returned
      return {
        ...state, // copy of state
        loading: true,
      }; // update of the new value

    case APP_DONE_LOADING:
      return { ...state, loading: false };

    case SET_MESSAGE:
      return { ...state, message: action.payload };

    case CLEAR_MESSAGE:
      return { ...state, message: null };

    default:
      // else, return the existing state unchanged
      return state;
  }
}
