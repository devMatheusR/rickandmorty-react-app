import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import api from "./services/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [characteres, setCharacteres] = useState<any[]>([]);

  const getAllCharacteres = async () => {
    console.log("chamando aq");
    await api
      .get(`/character`)
      .then((response) => {
        console.log(response.data.results);
        setCharacteres(response.data.results);
      })
      .catch(console.error);
  };

  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    getAllCharacteres();
  };

  return (
    <div className="App">
      <button type="submit" onClick={handleSubmit}>
        <p>Get characteres</p>
      </button>
      <div className="char-container">
        <h1> Rick and Morty</h1>

        <Container>
          <Row >
            {characteres.map((char) => (
              <Col>
                <img src={char.image} alt="Logo" />
                <b>Nome:</b>
                {char.name}
                <br />
                <b>Status:</b>
                {char.status}
                <br />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
