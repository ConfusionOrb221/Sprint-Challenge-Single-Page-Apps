import React from "react";
import CharacterList from "./CharacterList";
import WelcomePage from "./WelcomePage";
import { Route } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Route exact path ="/" component = {WelcomePage} />
      <Route path="/characters/:userId" render = {props =>
        <CharacterList {...props} />
      } />
    </header>
  );
}
