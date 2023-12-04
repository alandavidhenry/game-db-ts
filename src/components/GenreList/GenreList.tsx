import React, { useEffect, useState } from 'react';
import { getGenres } from 'api/API';

// Define TypeScript interface for the state
interface Genre {
  id: number;
  name: string;
  background_image: string;
};

// Define TypeScript interface for component props
interface GenreListProps {
  setGenreId: (genreId: number) => void;
  setGenreName: React.Dispatch<React.SetStateAction<string>>;
}

function GenreList({ setGenreId, setGenreName }: GenreListProps) {
  const [listGenres, setListGenres] = useState<Genre[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    getListGenres();
  }, []); // Empty dependency array to run the effect only once on mount

  const getListGenres = async () => {
    try {
      const res = await getGenres();
      const newListGenres: Genre[] = res.data.results
      setListGenres(newListGenres);
      console.log('Genres:', newListGenres);
    } catch (error) {
      console.error('Error fetching top five games list', error);
    }
  };

  return (
    <div className='m-5'>
      <div className='flex flex-row flex-wrap gap-4 justify-center'>
        { listGenres.map((item, index) => (
          <span 
            key={ item.id }
            id='genre'
            className={`bg-zinc-800 hover:bg-zinc-600 px-4 py-1 rounded-lg shadow-md h-8 cursor-pointer transition hover:scale-[103%] ${ index === activeIndex && 'bg-zinc-500 text-white' }`}
            onClick={() => {
              setActiveIndex(index);
              setGenreId(item.id);
              setGenreName(item.name);
            }}
          >
            { item.name }
          </span>
        ))}
          
      </div>
    </div>
  )
}

export default GenreList;