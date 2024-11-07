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
    <div className="max-w-lg mx-auto p-6">
        {idOrder === null ? (
            <form onSubmit={handleSubmitForm} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <input
                type="text"
                name="fullname"
                value={dataForm.fullname}
                onChange={handleChangeInput}
                placeholder="Nombre Completo"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
            <input
                type="text"
                name="phone"
                value={dataForm.phone}
                onChange={handleChangeInput}
                placeholder="Teléfono"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
            <input
                type="text"
                name="address"
                value={dataForm.address}
                onChange={handleChangeInput}
                placeholder="Dirección"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
            <input
                type="email"
                name="email"
                value={dataForm.email}
                onChange={handleChangeInput}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
            <button
                type="submit"
                className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-800 transition"
            >
                Terminar Compra
            </button>
            </form>
        ) : (
            <div className="text-center bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">¡Orden Generada Correctamente!</h2>
            <p className="text-gray-700">Guarde su número de orden: <span className="font-bold">{idOrder}</span></p>
            <Link to="/">
                <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                Volver al inicio
                </button>
            </Link>
            </div>
        )}
    </div>
  )
}
