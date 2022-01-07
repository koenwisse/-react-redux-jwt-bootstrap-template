import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Space(props) {
  return (
    <Jumbotron
      style={{
        // props is a gathering of attributes, all these are gathered in a props object (basic building react)
        backgroundColor: props.backgroundColor,
        color: props.color,
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Link to={`/spaces/${props.id}`}>
        <Button>Visit space</Button>
      </Link>
    </Jumbotron>
  );
}
