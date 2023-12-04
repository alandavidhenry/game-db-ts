import React, { useEffect, useState } from 'react'
import image from 'assets/images/far-cry-3-cover.jpg'
import { getGamesByGenreId } from 'api/API';

// Define TypeScript interface for the state
interface Game {
  id: number;
  name: string;
  background_image: string;
};

// Define TypeScript interface for component props
interface GameGridProps {
  selectedGenreId: number;
  selectedGenreName: string;
}

function GameGrid({ selectedGenreId, selectedGenreName }: GameGridProps) {
  const [gamesByGenre, setGamesByGenre] = useState<Game[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch games based on the selected genre ID
        const res = await getGamesByGenreId(selectedGenreId);

        // Update state with the fetched games
        setGamesByGenre(res.data.results);
        console.log('Games by Genre:', res.data.results)
      } catch (error) {
        console.error('Error fetching genres', error);
      }
  };

  fetchData();
}, [selectedGenreId]);

  return (
    <div className='m-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {gamesByGenre.map((item, index) => (
          <div 
            key={ item.id }
            className='bg-zinc-800 hover:bg-zinc-600 px-4 py-1 rounded-lg shadow-md grid justify-items-center cursor-pointer transition hover:scale-[102%]'>
          <img src={ item.background_image } alt={ item.name } className='h-48 lg:h-72 object-cover rounded-lg my-4'></img>
          <h2 className='text-lg md:text-xl font-semibold text-center mb-4'>{ item.name }</h2>
        </div>
        )) }
          
      </div>
    </div>
  )
}

export default GameGrid;