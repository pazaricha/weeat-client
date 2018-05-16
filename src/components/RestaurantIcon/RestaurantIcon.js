import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantIcon.css';

const cuisineIconsMap = {
  'American': 'R',
  'Asian': 'G',
  'Bagels': 'V',
  'Bakery': 'Q',
  'BBQ': '%',
  'British': '',
  'Burger': 'A',
  'Cafe': 'B',
  'Chinese': 'D',
  'Cuban': '7',
  'Desserts': 'E',
  'Donuts': 'M',
  'European': '',
  'Fast Food': 'W',
  'French': 'C',
  'Healthy Food': 'H',
  'Indian': 'J​',
  'Italian': '5',
  'Japanese': 'I',
  'Latin American': '8',
  'Mediterranean': '?',
  'Mexican': '8',
  'Middle Eastern': '?',
  'Moroccan': '@',
  'New American': 'R',
  'Pizza': 'L',
  'Ramen': '​.',
  'Sandwich': ',',
  'Seafood': 'C',
  'Southern': '0',
  'Steak': '3',
  'Sushi': 'I',
  'Ukrainian': '&',
  'default': 'F',
};

const RestaurantIcon = (props) => {
  const icon = cuisineIconsMap[props.icon] || cuisineIconsMap.default;

  return (
    <span className="restaurant-icon" data-name={props.icon} title={props.icon}>{icon}</span>
  );
};

RestaurantIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default RestaurantIcon;
