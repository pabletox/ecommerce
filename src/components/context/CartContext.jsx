
import { createContext, useState, useEffect } from 'react'

//contexto del carrito
const cartContext = createContext()

const CartProvider = ({ children }) => {

    const[cart, setCart] = useState([])

    

    const addProductIncart = (newProduct) => {
       
        //comprobar si el producto nuevo ya esta en el carrito

        const tempCart = [...cart]
        const indexProduct = cart.findIndex( (productCart)=> productCart.id === newProduct.id )
 
        if(indexProduct >= 0){
            //sumar cantidades
            tempCart[indexProduct].quantity = tempCart[indexProduct].quantity + newProduct.quantity
            setCart(tempCart)
        }else{
            //agregar como producto nuevo

            setCart( [ ...cart, newProduct ] )

        }

    }

    const deleteProductById = (idProduct) => {
        const productsFilter = cart.filter( (productCart)=> productCart.id !== idProduct )
        setCart(productsFilter)
    }

    const deleteCart = () => {
        setCart([])
    }

    const Subtract = (idProduct) => {

        //comprobar si el producto nuevo ya esta en el carrito
        
        console.log('idProduct:'+idProduct)
        const tempCart = [...cart]
        const indexProduct = cart.findIndex( (productCart)=> parseInt(productCart.id) === parseInt(idProduct) )
        if(indexProduct >= 0){
            console.log('indexProduct:'+indexProduct)
            console.log('quantity:'+tempCart[indexProduct].quantity)
            if(parseInt(tempCart[indexProduct].quantity) === 1){
                console.log('entro en quantity =1 con :'+cart[indexProduct].quantity)
                const tempCart = cart.filter( (productCart)=> parseInt(productCart.id) !== parseInt(idProduct) )
                setCart(tempCart)
                
            }else{
                console.log('entro en quantity else con :'+cart[indexProduct].quantity)
                //resta en el carrito
                tempCart[indexProduct].quantity = tempCart[indexProduct].quantity -1
                setCart(tempCart)
            }

            
        }
        console.table(cart)
        
    }

    const addProductIncartPlus1 = (newProduct) => {
       
        //comprobar si el producto nuevo ya esta en el carrito
        const tempCart = [...cart]
        const indexProduct = cart.findIndex( (productCart)=> productCart.id === newProduct.id )
        
        if(indexProduct >= 0){
            
                //sumar cantidades
                tempCart[indexProduct].quantity = tempCart[indexProduct].quantity + 1
                setCart(tempCart)
            
        }else{
            //agregar como producto nuevo
            setCart( [ ...cart, newProduct ] )
        }

        console.table(cart)

    }



    const totalQuantity = () => {
        const quantity = cart.reduce( (total, productCart)=> total + productCart.quantity, 0 )
        return quantity
    }

    const totalPrice = () => {
        const price = cart.reduce( (total, productCart)=> total + ( productCart.quantity * productCart.price ), 0 )
        return price
    }

    return(
        <cartContext.Provider value={ { cart, addProductIncart, totalQuantity, deleteProductById, deleteCart, totalPrice, Subtract, addProductIncartPlus1 } } >
          {children}
        </cartContext.Provider>
    )

}
export { cartContext, CartProvider }