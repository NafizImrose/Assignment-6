import "./App.css";
import Hero from "./components/navbar/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Ratings from "./components/ratings/Ratings";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Ratings></Ratings>
    </>
  );
}

export default App;
