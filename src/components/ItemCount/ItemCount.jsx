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
    <div>
        <button onClick={handleClickSubtract} >-</button>
        <p>{count}</p>
        <button onClick={handleClickAdd} >+</button>
        <button onClick={ () => addProduct(count) } >Agregar producto al carrito</button>
    </div>
  )
}

export default ItemCount