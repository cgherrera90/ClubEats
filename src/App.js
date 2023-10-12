import React, { useState } from 'react';
import './App.css';

import SearchBar from './SearchBar/SearchBar';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import BusinessList from './BusinessList/BusinessList';
import Yelp from './utils/Yelp';

function App(){
  const [businessesList, setBusinessesList] = useState([]);

  const searchYelp = async (term, location, sort_by) => {
    const businesses = await Yelp.search(term, location, sort_by);
    setBusinessesList(businesses);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="background">
        <SearchBar searchYelp={searchYelp}/>
      </div>
      <Home />
      <BusinessList businesses={businessesList}/>
    </div>
  );
}

export default App;
