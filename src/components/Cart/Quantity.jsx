import React from 'react'



const Quantity = ({quantity, restar, sumar}) => {
    
   
  return (
        <>
          <div className="grid grid-cols-3 grid-rows-1">
            <div className="col-span-1 row-span-1 col-start-1 place-self-center ">
              <button className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none" onClick={restar}>-</button>
            </div>
            <div className="col-span-1 row-span-1 col-start-2 place-self-center ">
              <p>Cantidad: {quantity}</p>
            </div>
            <div className="col-span-1 row-span-1 col-start-3 place-self-center ">
              <button className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none" onClick={sumar}>+</button>
            </div>
          </div>
        </>
  )
}

export default Quantity