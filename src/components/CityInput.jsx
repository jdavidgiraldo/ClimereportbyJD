import React from 'react'

const CityInput = ({handleRequest}) => {
  return (
    <form onSubmit={handleRequest}>
      <div className='flex rounded-2xl overflow-hidden'>
        <input id="city" className='bg-gray-800/80 text-white p-2 outline-none' placeholder='City name...' />
        <button className='bg-blue-950/80 p-2 py-2'>Search</button>
      </div>
    </form>
  )
}

export default CityInput