import React from 'react'

function Footer() {

    const menu =[
        {text: 'Womens'},
        {text: 'Mens'},
        {text: 'On the street'},
        {text: 'The Catwalk'},
        {text: 'Adwatch'},
        {text: 'About'},
        {text: 'Tips'},
        {text: 'Privacy Policy'}]
  
return (
    <>
    <div>
    <ul className='Footer flex space-x-2'>
        {menu.map((link) =>
            <li className='text-red-500 p-4'>{link.text}</li>
        )}
      
    </ul>
    <p className='text-gray-500'>&copy; 2013 Valet Industries, Inc.</p>
    </div>
    </>
  )
}

export default Footer
