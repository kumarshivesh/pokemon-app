import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import SearchBox from './components/SearchBox';
import Spinner from './components/Spinner';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setLoading(true);
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      const pokemonList = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonRecord = await fetch(pokemon.url);
          return pokemonRecord.json();
        })
      );
      setPokemonData(pokemonList);
      setLoading(false);
    };

    fetchPokemonData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokémon List</h1>
        <SearchBox searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        {loading ? (
          <Spinner />
        ) : (
          <div className="pokemon-grid">
            {filteredPokemon.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
