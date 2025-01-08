import Image from 'next/image'
import { notFound } from 'next/navigation'
import AddToCartButton from '@/app/components/AddToCartButton'
import { products } from '@/app/lib/products'
import ReviewSection from '@/app/components/ReviewSection'

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <Image src={product.image} alt={product.name} width={600} height={400} className="rounded-lg shadow-lg object-cover w-full h-[400px]" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-purple-400">{product.name}</h1>
          <p className="text-xl text-gray-300 mb-4">{product.type}</p>
          <p className="text-2xl font-bold text-purple-400 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-300 mb-6">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
      <ReviewSection productId={product.id} />
    </div>
  )
}

