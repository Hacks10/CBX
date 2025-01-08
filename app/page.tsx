import Link from 'next/link'
import Image from 'next/image'
import { categories } from './lib/products'

const categoryImages = {
  'Video Effects': 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'Color Grading': 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'Motion Graphics': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'Audio': 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'Video Assets': 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-purple-400">Welcome to CBX</h1>
        <p className="text-xl text-gray-300 mb-8">Elevate your video editing with our premium resources</p>
        <Link href="/products" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
          Explore Products
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <Image 
                src={categoryImages[category as keyof typeof categoryImages] || `https://source.unsplash.com/random/800x600?${category.toLowerCase().replace(' ', ',')}`} 
                alt={category} 
                width={400} 
                height={225} 
                className="w-full object-cover h-48" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category}</h3>
                <Link href={`/products#${category}`} className="text-purple-400 hover:text-purple-300 font-semibold">View Products</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose CBX?</h2>
        <p className="text-xl text-gray-300 mb-8">Professional-grade resources to take your videos to the next level</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">High Quality</h3>
            <p className="text-gray-400">Meticulously crafted resources for the best results</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-400">Designed for seamless integration into your workflow</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Regular Updates</h3>
            <p className="text-gray-400">Stay current with the latest trends and techniques</p>
          </div>
        </div>
      </section>
    </div>
  )
}

