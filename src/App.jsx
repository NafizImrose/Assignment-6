import { Suspense } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Offers from "./components/offers/Offers";
import Pricing from "./components/pricing/Pricing";
import Ratings from "./components/ratings/Ratings";
import Steps from "./components/steps/Steps";
import { Toaster } from "react-hot-toast";

const dataFetch = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const dataPromise = dataFetch();
  return (
    <>
      <Toaster position="top-right"></Toaster>
      <Navbar></Navbar>
      <Hero></Hero>
      <Ratings></Ratings>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Offers dataPromise={dataPromise}></Offers>
      </Suspense>

      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  );
}

export default App;
