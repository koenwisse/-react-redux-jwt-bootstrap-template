import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import StoryCarousel from "../../components/StoryCarousel";
import Space from "../../components/Space";
import Loading from "../../components/Loading";
import { fetchSpaceById } from "../../store/spaces/actions";
import { selectSpaceDetails } from "../../store/spaces/selectors";
import { useParams } from "react-router-dom";
export default function SpaceDetails() {
  const { id } = useParams();
  const space = useSelector(selectSpaceDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch, id]);

  if (!space || parseInt(space.id) !== parseInt(id)) return <Loading />;

  return (
    <>
      <Space
        id={space.id}
        title={space.title}
        description={space.description}
        backgroundColor={space.backgroundColor}
        color={space.color}
        showLink={false}
      />
      <Container>
        <StoryCarousel space={space} />
      </Container>
    </>
  );
}
