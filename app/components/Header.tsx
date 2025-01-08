'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

export default function Header() {
  const { cart } = useCart()

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors">
          CBX
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
            <li><Link href="/products" className="hover:text-purple-400 transition-colors">Products</Link></li>
            <li><Link href="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
            <li>
              <Link href="/cart" className="flex items-center hover:text-purple-400 transition-colors">
                <ShoppingCart className="mr-2" />
                Cart
                {cartItemsCount > 0 && (
                  <span className="ml-1 bg-purple-500 text-white rounded-full px-2 py-1 text-xs">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

