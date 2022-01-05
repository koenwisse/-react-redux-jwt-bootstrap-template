import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export default function SpaceCard(props) {
  const { space } = props;
  const { backgroundColor, color, title, description } = space;
  return (
    <div
      style={{
        backgroundColor,
        color,
      }}
    >
      {/* props is gathering of attributes (see spacecard) */}
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/spaces/${props.id}`}>
        <Button>Visit space</Button>
      </Link>
    </div>
  );
}
