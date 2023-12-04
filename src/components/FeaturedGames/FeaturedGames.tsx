import React, { useEffect, useState } from 'react';
import { getTopFiveGames } from 'api/API';
import image from 'assets/images/image-featured-games.png';

// Define TypeScript interface for the state
interface Game {
  id: number;
  name: string;
  background_image: string;
};

function FeaturedGames() {

  const [listTopFiveGames, setListTopFiveGames] = useState<Game[]>([]);

  useEffect(() => {
    getListTopFiveGames();
  }, []); // Empty dependency array to run the effect only once on mount

  const getListTopFiveGames = async () => {
    try {
      const res = await getTopFiveGames();
      const newListTopFiveGames: Game[] = res.data.results
      setListTopFiveGames(newListTopFiveGames);
      console.log('Top Five Games:', newListTopFiveGames);
    } catch (error) {
      console.error('Error fetching top five games list', error);
    }
  };

  return (
    <div className='grid grid-cols-3 gap-5 px-5 pt-28 pb-8'>
      <img src={ image } alt='' className='col-span-3 md:col-span-2 rounded-lg shadow-md'/>
      <div className="col-span-1 hidden md:block">
        { listTopFiveGames.map((item, index) => (
          <div key={ item.id }>
            <ul className='flex flex-col mb-3'>
              <li className="px-5 py-5 rounded-lg bg-zinc-800 hover:bg-zinc-600 shadow-md cursor-pointer transition hover:scale-[101%]">{ item.name }</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedGames;