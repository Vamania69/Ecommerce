import React from "react";
import Button from "../components/button";
import Herocontainer from "../components/herocontainer";
import { CardData } from "../components/CardData";
import Card from "../components/Card";
function index() {
  return (
    <div>
      <Herocontainer />
      <Button />
      <Button />
      <CardData />
    </div>
  );
}

export default index;
