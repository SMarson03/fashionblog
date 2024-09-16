import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <>
    <div className='text-left'>
      <h1 className='text-red-600 font-arial text-5xl px-4 pt-4'>Sartre's List</h1>
      <h2 className='font-arial text-2xl px-4'>Better-Dressed People</h2>
      
    </div>
    <Navbar/> 
    </>
  )
}

export default Header
