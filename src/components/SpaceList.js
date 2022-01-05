import axios from "axios";
import { useEffect, useState } from "react";
import SpaceCard from "./SpaceCard";

export default function SpaceList() {
  // empty array is initial value, spaces is variable that holds an array that holds a space object
  // initial value is an empty array that is going to hold an object (useState Hook functionality)
  const [
    spaces, // getter
    /**
     *
     * @param {object[]}
     */
    setSpaces, // setter, take 1 argument of type array
  ] = useState([]);

  // not fetch with hook but with redux --> goes into action. Needs to be fetched with thunk.

  /**
   * hoi
   *
   * @param {number} num
   */
  function tmp(num) {}
  tmp("");
  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      // Getting back data from from the backend, axios.get data from endpoint, between quotes you can say which data from which endpoint you want
      const res = await axios.get("http://localhost:4000/spaces");

      console.log("Got back:", res);

      setSpaces(res.data.Spaces);
    }
    doSomeDataFetching();
  }, []);

  return (
    <div>
      <p>Here's a lovely list of spaces, for your reading pleasure:</p>
      {spaces.map((space) => (
        // id is unique identifier, title is in backend the referral to the data that is in the title column in my database,
        <SpaceCard
          // attributes, all these are gathered in a props object
          key={space.id}
          title={space.title}
          content={space.description}
        />
      ))}
    </div>
  );
}
