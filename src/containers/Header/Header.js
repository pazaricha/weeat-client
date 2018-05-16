import React from 'react';
import './Header.css';
import MainFilter from '../../components/MainFilter/MainFilter';
import SecondaryFilters from '../../components/SecondaryFilters/SecondaryFilters';
import AddRestaurantButton from '../../components/AddRestaurantButton/AddRestaurantButton';

const header = (props) => (
  <header className="header">
    <div className="container">
      <h1 className="logo">WeEat 🥙</h1>
      <h2>It's 12:00 and you're hungry 😛</h2>
      <MainFilter onRestaurantNameFilterChange={props.onRestaurantNameFilterChange} />
      <AddRestaurantButton />
    </div>
    <SecondaryFilters />
  </header>
);

export default header;
