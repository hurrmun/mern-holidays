import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const apiURL = "/api/holidays/";

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch(apiURL);
    //   const data = await res.json();
    //   console.log("data from API", data);
    // };
    // fetchData();

    const fetchData = async () => {
      const data = await axios.get(apiURL);
      console.log("data from API", data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Holiday MERN App</h1>
    </div>
  );
}

export default App;
