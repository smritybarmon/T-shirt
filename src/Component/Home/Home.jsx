import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const tShirts = useLoaderData();
  return <div>This is home: {tShirts.length}</div>;
};

export default Home;
