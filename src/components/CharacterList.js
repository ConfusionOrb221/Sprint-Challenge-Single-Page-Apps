import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState();
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    getData();
  }, []);

  async function getData(){
    setName(props.match.params.userId);
    try{
      const response = await fetch('https://rickandmortyapi.com/api/character/');
      const data = await response.json();
      const people = data.results;
      setCharList(people);
      setLoading(false);
      console.log(people);
    } catch(err){
      console.log("error getting data");
      setLoading(false);
    }
  }

  function displayChar(char){
    console.log(char.name);
    console.log(name);
    console.log(char.name.includes(name));
    if(char.name.includes(name)){
      return <h2> {char.name} </h2>;
    }
    else if(name === undefined){
     return <h2> {char.name} </h2>;
    }
  }

  return (
    <section className="character-list">
      <SearchForm props={props} />
      {loading === true ? <div>Loading...</div> : 
        charList.map(char =>(
        displayChar(char)  
       ))
      }
    </section>
  );
}
