import React from 'react'



const Quantity = ({quantity, restar, sumar}) => {
    
   
  return (
        <>
            <button onClick={restar}>-</button>
            <p>Cantidad: {quantity}</p>
            <button onClick={sumar}>+</button>
        </>
  )
}

export default Quantity