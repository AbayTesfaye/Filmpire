import { useEffect } from "react";
import "./App.css";

// 2611b215
const API_URL = "http://www.omdbapi.com?apikey=2611b215";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return <div className="App"></div>;
}

export default App;
