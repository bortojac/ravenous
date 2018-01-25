import React, { Component } from 'react';
import './App.css';
import BusinessList from '../BusinessList';
import Search from '../SearchBar';

const App = () => {
    return (
      <div className="App">
      <h1>ravenous</h1>
      <Search />
      <BusinessList /> 
    </div>
    );
  }

export default App;
