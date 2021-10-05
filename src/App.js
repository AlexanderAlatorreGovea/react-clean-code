import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import HiddenMessage from "./components/HiddenMessage";
import Login from "./components/Login";
import Greeting from "./components/Greeting";
import GetData from "./components/GetData";
import { Home } from "./components/Counter";
import SeachComp from "./components/Search";
import AxiosComp from "./components/AxiosComp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
      <HiddenMessage>
        <p>Hello World</p>
      </HiddenMessage>
      <Greeting />
      <Login />
      <SeachComp />
      {/* <GetData/> */}
      <Home />
      <AxiosComp />
    </div>
  );
}

export default App;
