import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">CBX</h3>
            <p className="text-gray-400">Premium video editing resources for professionals.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-purple-400 transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-400">Email: info@cbx.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          © {new Date().getFullYear()} CBX. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

