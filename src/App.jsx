import React, { useState, useEffect } from 'react';
import GameCard from './components/GameCard';
import { gamesData } from './data/gamesData';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Main Page');

  // Load selected category from localStorage on component mount
  useEffect(() => {
    const savedCategory = localStorage.getItem('selectedCategory');
    if (savedCategory) {
      setSelectedCategory(savedCategory);
    }
  }, []);

  // Save selected category to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('selectedCategory', selectedCategory);
  }, [selectedCategory]);

  // Filter games based on selected category
  const filteredGames = gamesData.filter(game => 
    game.categories.includes(selectedCategory)
  );

  const categories = ["Main Page", "A-Z", "-le Games", "Sports", "Favorites", "Recently Played"];

  return (
    <div className="App">
      <div className="game-hub">
        <h1 className="hub-title">Game Hub</h1>
        
        <div className="category-tabs">
          {categories.map(category => (
            <button
              key={category}
              className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="games-grid">
          {filteredGames.map(game => (
            <GameCard
              key={game.id}
              title={game.title}
              description={game.description}
              slug={game.slug}
            />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="no-games">
            <p>No games found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
