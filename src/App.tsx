import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import api from "./config/api";
import { AxiosResponse } from "axios";

function App() {
  const [platform, setPlatform] = useState<string>("Steam");
  const [username, setUsername] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);

  const getPlayerData = async (platform: string, playerUsername: string) => {
    console.log("chamando aq");
    await api
      .get(``, {
        params: { platform: platform, query: playerUsername },
      })
      .then((response) => {
        console.log(response.data);
      });
  };
  //https://public-api.tracker.gg/v2/csgo/standard/search?platform=steam&query=padawann__
  const handleSubmit = async (e: any) => {
    getPlayerData(platform, username);
  };

  return (
    <div className="App">
      <div className="card">
        <button type="submit" onClick={handleSubmit}>
          <p>Get player data</p>
        </button>
      </div>
      <form>
        <p>
          <label htmlFor="inputName">Nome: </label>
          <input
            className="inputName"
            datatype="string"
            defaultValue={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="plataforma">Plataforma: </label>
          <input
            className="inputPlataforma"
            datatype="string"
            defaultValue={platform}
            onChange={(e) => setPlatform(e.target.value)}
          />
        </p>
      </form>
      <div>{results}</div>
      
    </div>
  );
}

export default App;
