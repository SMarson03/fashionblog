import React from 'react'

function Article({text, text2, image}) {
  return (
    <>
    <div className='Article border-b-2 border-gray-200'>
        <h1 className='text-2xl text-gray-400 mt-6'>{text}</h1>
        <h2 className='text-4xl font-sans py-4'>{text2}</h2>
        <img src={image}/>
        <p className='text-gray-500 mt-8 leading-7'><span className='text-gray-400 text-7xl float-left'>C</span>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Sed ac nunc sit amet libero ultrices</p>
            <br/>
            <p className='text-red-600 font-extrabold pb-4'>Continues...</p>,

      </div>
    </>
  )
}

export default Article
