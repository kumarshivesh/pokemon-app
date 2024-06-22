import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ searchTerm, handleSearchChange }) => (
  <input
    type="text"
    placeholder="Search Pokémon"
    value={searchTerm}
    onChange={handleSearchChange}
  />
);

SearchBox.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;
