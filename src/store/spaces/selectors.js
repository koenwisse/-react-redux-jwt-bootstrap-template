// Selector: get the spaces from the redux store by reading the current state (spaces is in a specific state in your app)
/**
 * @returns {object[]}
 */
export const selectSpaces = (state) => {
  console.log("state", state);
  // 1st spaces comes from rootR, second spaces comes from spaceReducer and not from backend
  // state.spaces is state object of spaceR
  // state.spaces.Spaces is the array of space objects from the reducer
  // state is all reducers together but we need only spaces from reducer
  return state.spaces.allSpaces;
};

export const selectSpaceDetails = (state) => state.spaces.spaceDetails;
