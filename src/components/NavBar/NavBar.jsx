import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import fox from './assets/fox.png'

const NavBar = () => {
  return (
    <div>
        <nav class="flex justify-between items-center p-2.5 relative bg-gray-800 h-20 text-[20px] font-sans" >
            <div class="flex items-center">
                <img src={fox} alt="logo" class="w-[8%]" />
            </div>

            <div class="absolute left-1/2 transform -translate-x-1/2 flex gap-10 ">
                <button class="rounded-md px-3 py-2 text-white hover:bg-gray-700">categoria 1</button>
                <button class="rounded-md px-3 py-2 text-white hover:bg-gray-700">categoria 2</button>
                <button class="rounded-md px-3 py-2 text-white hover:bg-gray-700">categoria 3</button>
            </div>
        
            
            <div class="text-white text-[15px]">
                <CartWidget />
            </div>

        </nav>
    </div>
  )
}

export default NavBar