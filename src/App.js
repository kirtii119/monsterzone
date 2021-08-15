import './App.css';
import Data from "./data.json";
import { useState } from "react";
//import monster from './monsterbg.jpeg'

function App() {
  const [Search, setSearch] = useState("");

  return (
    <div className="App">

   {/* <div style={{  width: "100%", backgroundImage: `url(${monster})`, backgroundSize: 'cover', }}> */}

      <input
        type="text"
        placeholder="SEARCH"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      
      <div class="cards">
        {Data.filter((mons) => {
          if (Search == "") return mons;
          else if (
            mons.name.toLowerCase().includes(Search.toLowerCase()) ||
            mons.username.toLowerCase().includes(Search.toLowerCase())
          )
            return mons;
        }).map((mons, index) => {
          return (
            <div>
              
              <div
                class="card"
                style={{ width: "22rem", height: "25rem" }}>
                <img class="card-img-top" src={mons.image} />
                <div class="card" style={{ backgroundColor: "#FFFF00" }}>
                  <h3 class="card-title">{mons.name}</h3>
                  <p class="card-text">{mons.username}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    {/* </div> */}
    </div>
  );
}

export default App;
