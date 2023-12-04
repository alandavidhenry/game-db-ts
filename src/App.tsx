import React from 'react';
import 'App.css';
import Header from 'layouts/Header/Header';
import FeaturedGames from 'components/FeaturedGames/FeaturedGames';
import Footer from 'layouts/Footer/Footer';
import GenreList from 'components/GenreList/GenreList';
import GameGrid from 'components/GameGrid/GameGrid';

function App() {
  return (
    <div className='bg-zinc-900 text-zinc-200'>
      <Header />
      <FeaturedGames />
      <GenreList />
      <GameGrid />
      <Footer />
    </div>
  );
}

export default App;
