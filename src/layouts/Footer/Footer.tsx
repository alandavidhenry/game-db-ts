import React from 'react'

function Footer() {
  return (
    <div className="flex items-center justify-between flex-wrap bg-zinc-800 p-5 shadow-lg w-full">
      <div className="flex items-center text-white mr-6">
        <span className="font-semibold text-xl">GameDB</span>
      </div>
      <div className="flex flex-grow items-center">
        <div className="text-md flex-grow">
          <a href="#a" className="inline-block mt-0 text-gray-400 hover:text-white mr-4">
            Docs
          </a>
        </div>
        <div>
          <a href="#a" className="inline-block text-sm">Profile Icon</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;