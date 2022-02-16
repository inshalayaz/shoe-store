import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import './style.css';

const Searchbar = () => {
  const { navbar } = useContext(AppContext);

  const selectClass = () => {
    const location = useLocation();
    // console.log(location.pathname);
    if (location.pathname !== '/' || navbar === true) {
      return 'active-searchbar searchbar';
    } else {
      return 'searchbar';
    }
  };
  const selectedClass = selectClass();
  console.log(selectClass());
  return (
    <input
      type="search"
      name=""
      placeholder="Search"
      className={selectedClass}
    />
  );
};

export default Searchbar;
