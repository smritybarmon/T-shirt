import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/ GrandPa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2 className="grandpa-h1">Uncle</h2>
      <p className="grandpa-h1"> Grandpa money: {money}</p>
      <button onClick={() => setMoney(money + 1000)}>Send 1000tk</button>
      <section className="flex">
        <Cousin>Pritom</Cousin>
        <Cousin>Prity</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
