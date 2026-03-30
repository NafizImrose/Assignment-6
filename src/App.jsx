import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Ratings from "./components/ratings/Ratings";
import Steps from "./components/steps/Steps";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Ratings></Ratings>
      <Steps></Steps>
      <Pricing></Pricing>
    </>
  );
}

export default App;
