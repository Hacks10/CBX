'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../contexts/CartContext'
import { products } from '../lib/products'
import { Trash2 } from 'lucide-react'
import { initializeRazorpayCheckout } from '../utils/razorpay'
import toast from 'react-hot-toast'

export default function Cart() {
  const { cart, removeFromCart, getCartTotal, clearCart } = useCart()

  const cartItems = cart.map(item => {
    const product = products.find(p => p.id === item.id)
    return product ? { ...product, quantity: item.quantity } : null
  }).filter((item): item is NonNullable<typeof item> => item !== null)

  const handleCheckout = async () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your actual Razorpay key
      amount: getCartTotal() * 100, // Razorpay expects amount in paise
      currency: 'INR',
      name: 'CBX',
      description: 'Purchase from CBX',
      handler: function (response: any) {
        toast.success('Payment successful!');
        clearCart();
        // Here you would typically send the payment details to your server
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com'
      },
      theme: {
        color: '#7C3AED'
      }
    };

    try {
      await initializeRazorpayCheckout(options);
    } catch (error) {
      console.error('Razorpay Checkout Error:', error);
      toast.error('There was an error processing your payment. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-400">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-300 mb-8">Your cart is currently empty.</p>
          <Link href="/products" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-700 py-4">
              <div className="flex items-center">
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-600">
                <Trash2 size={24} />
              </button>
            </div>
          ))}
          <div className="mt-8 text-right">
            <p className="text-2xl font-bold">Total: ${getCartTotal().toFixed(2)}</p>
            <button 
              onClick={handleCheckout}
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

