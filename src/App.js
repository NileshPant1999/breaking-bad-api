import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import "./App.css";
import Character from "./components/Character";
import HomeScreen from "./components/screens/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/character/:id" component={Character}></Route>
      </main>
    </BrowserRouter>
  );
};

export default App;
