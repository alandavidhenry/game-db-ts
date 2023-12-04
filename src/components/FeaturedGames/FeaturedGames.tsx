import React, { useEffect, useState } from 'react';
import { getTopFiveGames } from 'api/API';
import image from 'assets/images/image-featured-games.png';

// Define TypeScript interface for the state
interface Game {
  id: number;
  name: string;
}

// Define TypeScript interface for the API response
// interface ApiResponse {
//   results: Game[];
// }

function FeaturedGames() {

  const [listAllGames, setListAllGames] = useState<Game[]>([]);

  useEffect(() => {
    getListAllGames();
    console.log('listAllGames', listAllGames);
  }, []);

  const getListAllGames = async () => {
    try {
      const res = await getTopFiveGames();
      setListAllGames(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.error('Error fetching all games list', error);
    }
  };

  return (
    <div className='grid grid-cols-3 gap-5 px-5 pt-28 pb-8'>
      <img src={ image } alt='' className='col-span-3 md:col-span-2 rounded-lg shadow-md'/>
      <div className="col-span-1 hidden md:block">
        { listAllGames.map((item, index) => (
          <div key={ item.id }>
            <ul className='flex flex-col space-y-5'>
              <li className="px-5 py-5 rounded-lg bg-zinc-800 shadow-md cursor-pointer">{ item.name }</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedGames;