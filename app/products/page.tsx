import Link from 'next/link'
import Image from 'next/image'
import { products, categories } from '../lib/products'

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-400">Our Products</h1>
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                  <Image src={product.image} alt={product.name} width={400} height={225} className="w-full object-cover h-48" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-400 mb-2">{product.type}</p>
                    <p className="text-purple-400 font-bold mb-4">${product.price.toFixed(2)}</p>
                    <Link href={`/products/${product.id}`} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

