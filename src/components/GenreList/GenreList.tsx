import React from 'react'

function GenreList() {
  return (
    <div className='m-5'>
      <div className='flex flex-row gap-4'>
        <span className='bg-zinc-800 px-4 py-1 rounded-lg shadow-md'>Action</span>
        <span className='bg-zinc-800 px-4 py-1 rounded-lg shadow-md'>Indie</span>
        <span className='bg-zinc-800 px-4 py-1 rounded-lg shadow-md'>RPG</span>
      </div>
    </div>
  )
}

export default GenreList;