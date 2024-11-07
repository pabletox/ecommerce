import React, { useState } from 'react'

const ItemCount = ({stock, addProduct}) => {
    const [count, setCount] = useState(1)

    //suma uno al conteo
    const handleClickAdd = () =>{

        if(count < stock){
            setCount(count +1)
        }

    }

    //restar 1 al contador
    const handleClickSubtract = () => {
        if( count > 1 ){
        setCount( count - 1 )
        }
    }


  return (
    <div className="grid grid-cols-3 grid-rows-2">
        <div className="col-span-1 row-span-1 col-start-1 place-self-center ">
            <button  className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none" onClick={handleClickSubtract} >-</button>
        </div>
        <div className="col-span-1 row-span-1 col-start-2 place-self-center">
            <p>{count}</p>
        </div>
        <div className="col-span-1 row-span-1 col-start-3 place-self-center">
            <button className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none" onClick={handleClickAdd} >+</button>
        </div>
        <div className="col-span-3 row-span-2 col-start-1 place-self-center">
            <button className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none" onClick={ () => addProduct(count) } >Agregar producto al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount