import React from 'react'
import CartWidget from '../CartWidget/Cartwidget'
import fox from '../../assets/logo_zorro_gamer.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='sticky top-0 shadow-custom-20px'>
        <nav className="flex justify-between items-end p-2 relative bg-gray-800 h-17 text-[17px]" >
            <div className="flex items-center">
                <Link to="/">
                    <img src={fox} alt="logo" className="w-[31%]" />
                </Link>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 ">
                <Link to="/category/Mouse"><button className="rounded-md px-3 py-2 text-white hover:bg-gray-700">Mouse</button></Link>
                <Link to="/category/Teclado"><button className="rounded-md px-3 py-2 text-white hover:bg-gray-700">Teclado</button></Link>
                <Link to="/category/Audifono"><button className="rounded-md px-3 py-2 text-white hover:bg-gray-700">Audifono</button></Link>
                <Link to="/category/Monitor"><button className="rounded-md px-3 py-2 text-white hover:bg-gray-700">Monitor</button></Link>
                <Link to="/category/Tarjeta_Video"><button className="rounded-md px-3 py-2 text-white hover:bg-gray-700">Tarjeta de Video</button></Link>
                <Link to="/category/Otros"><button className="rounded-md px-3 py-2 text-white hover:bg-gray-700">Otros Accesorios</button></Link>
                

            </div>
        
            
            <div className="text-white text-[15px]">
                <CartWidget />
            </div>

        </nav>
    </div>
  )
}

export default NavBar