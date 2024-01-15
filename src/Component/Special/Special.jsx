import React, { useContext } from "react";
import { RingContext } from "../Grandpa/ GrandPa";

const Special = () => {
  const aungti = useContext(RingContext);
  return (
    <div>
      <h2>Special</h2>
      <p>{aungti}</p>
    </div>
  );
};

export default Special;
