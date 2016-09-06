import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import BeerStreak from "./BeerStreak";

export default class Layout extends React.Component {
  render = () =>{
    return (
      <div>
        <BeerStreak title = {"Beerstreak"} />
      </div>
    );
  }
}
