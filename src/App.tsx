import React, { useState } from 'react';
import 'App.css';
import Header from 'layouts/Header/Header';
import FeaturedGames from 'components/FeaturedGames/FeaturedGames';
import Footer from 'layouts/Footer/Footer';
import GenreList from 'components/GenreList/GenreList';
import GameGrid from 'components/GameGrid/GameGrid';

function App() {

  const [selectedGenreId, setSelectedGenreId] = useState<number>(0);
  const [selectedGenreName, setSelectedGenreName] = useState<string>('Action');

  const setGenreId = (genreId: number) => {
      setSelectedGenreId(genreId)
  }

  const setGenreName = (genreName: string) => {
      setSelectedGenreName(genreName)
  }
    
  return (
    <div className='bg-zinc-900 text-zinc-200'>
      <Header />
      <FeaturedGames />
      <GenreList 
        setGenreId={setSelectedGenreId}
        setGenreName={setSelectedGenreName}
      />
      <GameGrid 
        selectedGenreId={selectedGenreId}
        selectedGenreName={selectedGenreName}
      />
      <Footer />
    </div>
  );
}

export default App;
