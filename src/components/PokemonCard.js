import React from 'react';
import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon }) => (
  <div className="pokemon-card">
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <h2>{pokemon.name}</h2>
  </div>
);

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCard;
