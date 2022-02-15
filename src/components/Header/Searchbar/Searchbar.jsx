import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import './style.css';

const Searchbar = () => {
  const { navbar } = useContext(AppContext);
  return (
    <input
      type="search"
      name=""
      placeholder="Search"
      className={navbar ? 'active-searchbar searchbar' : 'searchbar'}
    />
  );
};

export default Searchbar;
