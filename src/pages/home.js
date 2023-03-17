import React from "react";
import Button from "../components/button";
import Herocontainer from "../components/herocontainer";
import LatestIteams from "../components/latestIteam";
import Category from "../components/category";
const Home = () => {
  return (
    <div>
      <Herocontainer />
      <LatestIteams />
      <Button />
    </div>
  );
};
export default Home;
