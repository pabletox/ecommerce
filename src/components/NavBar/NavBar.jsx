import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import fox from '../../assets/logo_zorro_gamer.png'

const NavBar = () => {
  return (
    <div>
        <nav className="flex sticky top-0 justify-between items-end p-2 relative bg-gray-800 h-17 text-[17px]" >
            <div className="flex items-center">
                <img src={fox} alt="logo" className="w-[35%]" />
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 ">
                <button className="rounded-md px-3 py-2 text-white hover:bg-gray-700">Componentes</button>
                <button className="rounded-md px-3 py-2 text-white hover:bg-gray-700">Streaming</button>
                <button className="rounded-md px-3 py-2 text-white hover:bg-gray-700">Audio y Video</button>
                <button className="rounded-md px-3 py-2 text-white hover:bg-gray-700">Redes</button>
                <button className="rounded-md px-3 py-2 text-white hover:bg-gray-700">Otros Accesorios</button>

            </div>
        
            
            <div className="text-white text-[15px]">
                <CartWidget />
            </div>

        </nav>
    </div>
  )
}

export default NavBar