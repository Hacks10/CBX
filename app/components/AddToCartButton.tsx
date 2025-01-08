'use client'

import { useState } from 'react'
import { ShoppingCart, Check } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import toast from 'react-hot-toast'

export default function AddToCartButton({ product }: { product: { id: number, name: string } }) {
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product.id)
    setIsAdded(true)
    toast.success(`${product.name} added to cart!`)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`flex items-center justify-center px-6 py-3 rounded-full font-bold transition-colors ${
        isAdded ? 'bg-green-500 hover:bg-green-600' : 'bg-purple-600 hover:bg-purple-700'
      } text-white`}
    >
      {isAdded ? (
        <>
          <Check className="mr-2" />
          Added to Cart!
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2" />
          Add to Cart
        </>
      )}
    </button>
  )
}

