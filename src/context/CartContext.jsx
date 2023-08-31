import React, { createContext, useEffect, useState } from 'react'

import { getAllProducts } from '../services/products'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [cart, setCart] = useState([])
  const [quantityValue, setQuantityValue] = useState(1)
  const [message, setMessage] = useState('')

  const [open, setOpen] = React.useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const products = await getAllProducts()
        setProducts(products)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    getData()
  }, [])

  const addProductToCart = (productId) => {
    const product = products.find((product) => product.id === productId)
    if (product) {
      if (product.stock >= quantityValue) {
        addProduct({
          ...product,
          quantityValue,
          stock: product.stock - quantityValue,
        })
        setOpen(true)
        setMessage('Agregado al carrito')
        console.log(message)
      } else {
        setMessage('Stock insuficiente')
      }
    } else {
      setMessage('Producto no encontrado')
    }
  }

  const addProduct = (product) => {
    const existProduct = cart.some((p) => p.id === product.id)

    if (existProduct) {
      setCart((prevCart) => {
        return prevCart.map((newProduct) => {
          if (newProduct.id === product.id) {
            const newQuantityValue =
              newProduct.quantityValue + product.quantityValue
            const newPrice = product.price * newQuantityValue
            return {
              ...newProduct,
              quantityValue: newQuantityValue,
              price: newPrice,
            }
          }
          return newProduct
        })
      })
    } else {
      setCart([
        ...cart,
        { ...product, price: product.price * product.quantityValue },
      ])
    }
  }

  const handleTotalCartPrice = () => {
    const total = cart.reduce((sum, producto) => sum + producto.price, 0)
    return total
  }

  const totalPrice = handleTotalCartPrice()

  const handleRemoveProductCart = (product) => {
    setCart((prevCart) => {
      return prevCart.map((newProduct) => {
        if ((newProduct.id === product.id) & (newProduct.quantityValue > 1)) {
          const newQuantityValue = newProduct.quantityValue - 1
          const newPrice =
            newProduct.price - newProduct.price / newProduct.quantityValue

          return {
            ...newProduct,
            quantityValue: newQuantityValue,
            price: newPrice,
          }
        }
        return newProduct
      })
    })
  }

  const handleAddProductCart = (product) => {
    setCart((prevCart) => {
      return prevCart.map((newProduct) => {
        if (newProduct.id === product.id && newProduct.quantityValue < 1000) {
          const newQuantityValue = newProduct.quantityValue + 1
          const newPrice =
            newProduct.price + newProduct.price / newProduct.quantityValue

          return {
            ...newProduct,
            quantityValue: newQuantityValue,
            price: newPrice,
          }
        }
        return newProduct
      })
    })
  }

  const removeProduct = (id) => {
    setCart((prev) => prev.filter((product) => product.id !== id))
  }

  return (
    <CartContext.Provider
      value={{
        products,
        loading,
        error,
        cart,
        addProduct,
        addProductToCart,
        removeProduct,
        quantityValue,
        setQuantityValue,
        message,
        handleRemoveProductCart,
        handleAddProductCart,
        totalPrice,
        open,
        handleClose,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
