import React, { useState } from 'react';
import './App.css';

import SearchBar from './SearchBar/SearchBar';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import BusinessList from './BusinessList/BusinessList';
import Yelp from './utils/Yelp';

function App(){
  //Setting state for business list that will be displayed once search info is inputted
  const [businessesList, setBusinessesList] = useState([]);

  //Asynchronous function SearchBar component uses (passed down as prop) that will set new business list based on info returned from API (determined in Yelp component in utils)
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
