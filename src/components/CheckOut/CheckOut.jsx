import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/CartContext'
import { Timestamp, collection, addDoc, doc, updateDoc } from 'firebase/firestore'
import db from '../../db/db.js'
import { Link } from 'react-router-dom'

export const CheckOut = () => {
    const [dataForm, setDataForm] = useState({ fullname: "",
                                                phone: "",
                                                address: "",
                                                email: ""
                                            })
    const [idOrder, SetidOrder] = useState(null)

    const {cart, totalPrice, deleteCart} = useContext(cartContext)
                                            
    const handleChangeInput = (event) =>{
        //lo que hace la siguiente linea es con el spread guardar lo que tenga dataForm y luego con los event cambia los campos que se modifiquen
        setDataForm({...dataForm, [event.target.name]:event.target.value})
    }
    
    const handleSubmitForm = (event) => {
        //para evitar que se recargue la pagina
        event.preventDefault()

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            date: Timestamp.fromDate( new Date()),
            total: totalPrice()

        }
        uploadOrder(order)
        updateProduct()
    }

    const updateProduct = () => {

        console.log("updateProduct")
        cart.map((productCart)=>{
            const productRef = doc(db,"products",productCart.id)
            updateDoc(productRef, {
                stock: productCart.stock-productCart.quantity
            })

        })

    }

    const uploadOrder = (newOrder) => {

        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, newOrder).then((response)=>{
            SetidOrder(response.id)
        }).finally(()=>{
            deleteCart()
        })
    }

  return (
    <div>
        {
            idOrder === null ? (
                
                    <form onSubmit={handleSubmitForm}>
                        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder='Nombre Completo'/>
                        <input type="text" name="phone" value={dataForm.phone} onChange={handleChangeInput} placeholder='Telefono'/>
                        <input type="text" name="address" value={dataForm.address} onChange={handleChangeInput} placeholder='Dirección'/>
                        <input type="text" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder='Email'/>
                        <button type="submit"> Terminar Compra</button>
                    </form>

                
            ) : (
                <div>
                    <h2>Orden Generada Correctamente! </h2>
                    <p>Guarde su numero de orden: {idOrder}</p>
                    <Link to="/" ><button>Volver al inicio</button></Link>
                </div>
            )

        }
    </div>   
  )
}
