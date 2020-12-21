import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./components/ui/Header";
import "./App.css";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import ReactPaginate from "react-paginate";
import Character from "./components/Character";
import HomeScreen from "./components/HomeScreen";

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
