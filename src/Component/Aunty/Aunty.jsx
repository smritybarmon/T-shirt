import React from "react";
import Cousin from "../Cousin/Cousin";

const Aunty = () => {
  return (
    <div>
      <h2 className="grandpa-h1">Aunty</h2>
      <section className="flex">
        <Cousin>Anita</Cousin>
        <Cousin>Dip</Cousin>
      </section>
    </div>
  );
};

export default Aunty;
