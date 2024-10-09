import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

// 2611b215
const API_URL = "http://www.omdbapi.com?apikey=2611b215";

const Movie1 = {
  Title: "Spiderman and Grandma",
  Year: "2009",
  imdbID: "tt1433184",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg",
};

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search any Movie"
          value="Spiderman"
          onClick={() => {}}
        />
        <img src={SearchIcon} alt="search" />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{Movie1.Year}</p>
          </div>
          <div>
            <img src={Movie1.Poster} alt={Movie1.title} />
          </div>
          <div>
            <span>{Movie1.Type}</span>
            <h3>{Movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
