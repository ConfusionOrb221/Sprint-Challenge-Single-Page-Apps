import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import { render } from "react-dom";

export default function SearchForm(props) {
  const [name, setName] = useState('');

  function updateInput(e){
    e.preventDefault();
    setName(e.target.value);
  }

  return (
    <section className="search-form">
      Search by Name: 
      <input
        type="text"
        value={name}
        onChange={e => updateInput(e)}
        autoFocus
      />
      <a href={`/characters/${name}`} > Submit </a>
    </section>
  );
}
