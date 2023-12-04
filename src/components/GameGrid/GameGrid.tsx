import React from 'react'
import image from 'assets/images/far-cry-3-cover.jpg'

function GameGrid() {
  return (
    <div className='m-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        <div className='bg-zinc-800 px-4 py-1 rounded-lg shadow-md'>
          <img src={ image } alt='' className=''></img>
          <h2>Far Cry 3</h2>
        </div>
        <div className='bg-zinc-800 px-4 py-1 rounded-lg shadow-md'>
          <img src={ image } alt='' className=''></img>
          <h2>Far Cry 3</h2>
        </div>
        <div className='bg-zinc-800 px-4 py-1 rounded-lg shadow-md'>
          <img src={ image } alt='' className=''></img>
          <h2>Far Cry 3</h2>
        </div>
      </div>
    </div>
  )
}

export default GameGrid;