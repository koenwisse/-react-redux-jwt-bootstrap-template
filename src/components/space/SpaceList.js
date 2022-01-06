import axios from "axios";
import { useEffect, useState } from "react";
import SpaceCard from "./SpaceCard";
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { fetchSpaces } from "../../store/appState/actions";
import { useDispatch, useSelector } from "react-redux";

export default function SpaceList() {
  // empty array is initial value, spaces is variable that holds an array that holds a space object
  // initial value is an empty array that is going to hold an object (useState Hook functionality)
  // const [
  //   spaces, // getter
  //   setSpaces, // setter, take 1 argument of type array
  // ] = useState([]);

  // Selector: get the spaces from the redux store by reading the current state (spaces is in a specific state in your app)
  const spaces = useSelector((state) => {
    console.log("state", state);
    // 1st spaces comes from rootR, second spaces comes from spaceReducer and not from backend
    // state.spaces is state object of spaceR
    // state.spaces.Spaces is the array of space objects from the backend
    // state is all reducers together but we need only spaces from spaceR
    return state.spaces.Spaces;
  });

  // not fetch with hook but with redux --> goes into action. Needs to be fetched with thunk.
  //F1.3.
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch a "thunk action" by calling the "thunk action creator" named `fetchSpaces`
    dispatch(fetchSpaces()); // goes to `redux-thunk`
    // async function doSomeDataFetching() {
    //   console.log("I'm gonna fetch some data!");

    // Getting back data from from the backend, axios.get data from endpoint, between quotes you can say which data from which endpoint you want
    // const res = await axios.get("http://localhost:4000/spaces");

    // console.log("Got back:", res);

    // setSpaces(res.data.Spaces);
    // }
    // doSomeDataFetching();
  }, []);

  return (
    <Jumbotron>
      {spaces.map((space) => (
        // id is unique identifier, title is in backend the referral to the data that is in the title column in my database,
        <SpaceCard
          // traditionally called attributes, all these are gathered in a props object (basic building react)
          key={space.id}
          // title={space.title}
          // content={space.description}
          // backgroundColor={space.backgroundColor}
          // color={space.color}
          space={space}
        />
      ))}
    </Jumbotron>
  );
}
