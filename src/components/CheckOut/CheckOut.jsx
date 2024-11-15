import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/CartContext'
import { Timestamp, collection, addDoc, doc, updateDoc } from 'firebase/firestore'
import db from '../../db/db.js'
import { Link } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import  validateForm from "../../utils/validateForm.js"

export const CheckOut = () => {
    const [dataForm, setDataForm] = useState({ fullname: "",
                                                phone: "",
                                                address: "",
                                                email: ""
                                            })
    const [idOrder, SetidOrder] = useState(null)

    const {cart, totalPrice, deleteCart} = useContext(cartContext)

    const [isLoading, setIsLoading] = useState(false);
                                            
    const handleChangeInput = (event) =>{
        //lo que hace la siguiente linea es con el spread guardar lo que tenga dataForm y luego con los event cambia los campos que se modifiquen
        setDataForm({...dataForm, [event.target.name]:event.target.value})
    }
    
    const handleSubmitForm = async(event) => {
        //para evitar que se recargue la pagina
        event.preventDefault()
        

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            date: Timestamp.fromDate( new Date()),
            total: totalPrice()

        }

        const response = await validateForm(dataForm)
        if (response.status==="success"){
            setIsLoading(true)
            uploadOrder(order)

        }else{
            toast.error(response.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }
            
        

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
            updateProduct()
            deleteCart()
            toast.success('Orden Creada con exito!!! 😎', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
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
                    className={`w-full py-2 rounded transition ${
                        isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-800'
                    } text-white`}
                    disabled={isLoading}
                >
                    {isLoading ? "Cargando..." : "Terminar Compra"}
            </button>

                {isLoading && (
                    <p className="text-center text-gray-600 mt-4">Procesando tu orden, por favor espera...</p>
                )}
            </form>
        ) : (
            <div className="text-center bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">¡¡Orden Generada Correctamente!!</h2>
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
