
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">

        <Weather />
        <footer>
          This project was coded by {" "}
          <a href="https://www.linkedin.com/in/andria-c/" target="_blank" rel="noreferrer"> Andria
          </a> and is {" "}
          <a href="https://github.com/andria-coder/weather-react" target="_blank" rel="noreferrer">open-sourced on GitHub.</a>
        </footer>
      </div>
    </div>
  );
}
