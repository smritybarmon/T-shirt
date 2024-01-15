import React from "react";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
import Borther from "../Brother/Borther";

const Father = () => {
  return (
    <div>
      <h2 className="grandpa-h1">Father</h2>
      <section className="flex">
        <MySelf></MySelf>
        <Sister></Sister>
        <Borther></Borther>
      </section>
    </div>
  );
};

export default Father;
