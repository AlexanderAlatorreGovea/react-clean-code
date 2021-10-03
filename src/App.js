import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import HiddenMessage from "./components/HiddenMessage";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
      <HiddenMessage>
        <p>Hello World</p>
      </HiddenMessage>
      <Login/>
    </div>
  );
}

export default App;
