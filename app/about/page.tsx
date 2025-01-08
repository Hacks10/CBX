import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-400">About CBX</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="/placeholder.svg?text=CBX+Team" alt="CBX Team" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-300 mb-4">
            CBX was founded in 2015 by a group of passionate video editors who saw a need for high-quality, easy-to-use resources in the industry. What started as a small collection of transition packs has grown into a comprehensive library of professional-grade video editing tools.
          </p>
          <p className="text-gray-300 mb-4">
            Our mission is to empower creators by providing them with the best possible resources to bring their visions to life. We believe that with the right tools, anyone can create stunning videos that captivate audiences.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <p className="text-gray-300 mb-4">
            At CBX, we're committed to quality, innovation, and customer satisfaction. We regularly update our products to keep up with the latest trends and technologies in video editing. Our team of experienced professionals works tirelessly to ensure that every product we release meets our high standards.
          </p>
          <p className="text-gray-300">
            We're more than just a company - we're a community of creators. We love seeing what our customers create with our resources and are always here to support you on your creative journey.
          </p>
        </div>
      </div>
    </div>
  )
}

