'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { products } from '../lib/products'

type CartItem = {
  id: number
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (productId: number) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
  getCartTotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prevCart, { id: productId, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const product = products.find(p => p.id === item.id)
      return total + (product ? product.price * item.quantity : 0)
    }, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

