import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { fetchSpaces } from "../../store/spaces/actions";
import { selectSpaces } from "../../store/spaces/selectors";
import Space from "../../components/Space";

export default function Spaces() {
  // not fetch with hook but with redux --> goes into action. Needs to be fetched with thunk.
  //F1.3.
  const dispatch = useDispatch();
  // useSelector is react-redux hook
  const spaces = useSelector(selectSpaces);

  useEffect(() => {
    // dispatch a "thunk action" by calling the "thunk action creator" named `fetchSpaces` in the useEffectt. If we dont call we dont get the data.
    dispatch(fetchSpaces()); // goes to `redux-thunk`
    // dispatch();
  }, [dispatch]);

  return (
    <>
      <Jumbotron>
        {/* this is what is in the header */}
        <h1>Spaces</h1>
      </Jumbotron>
      {/* Container is what is in body of the page */}
      <Container>
        {/* we map over the spaces array and put in as a param a callback function that returns the values of the names in the objects */}
        {spaces.map((space) => {
          return (
            <Space
              key={space.id}
              id={space.id}
              title={space.title}
              description={space.description}
              backgroundColor={space.backgroundColor}
              color={space.color}
              showLink={true}
            />
          );
        })}
      </Container>
    </>
  );
}
