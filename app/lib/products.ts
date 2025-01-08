export const products = [
  { 
    id: 1, 
    name: "Ultimate Transitions Pack", 
    type: "Transition Pack", 
    category: "Video Effects",
    price: 49.99, 
    description: "A comprehensive pack of smooth, dynamic transitions for your video projects.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 2, 
    name: "Pro Color LUTs Bundle", 
    type: "LUTs", 
    category: "Color Grading",
    price: 29.99, 
    description: "Professional color lookup tables to enhance the mood and atmosphere of your footage.",
    image: "https://images.unsplash.com/photo-1621600411688-4be93cd68504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 3, 
    name: "Dynamic Text Animations", 
    type: "After Effects Bundle", 
    category: "Motion Graphics",
    price: 39.99, 
    description: "Bring your text to life with these eye-catching, customizable animations.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  },
  { 
    id: 4, 
    name: "Cinematic Color Grading Pack", 
    type: "LUTs", 
    category: "Color Grading",
    price: 34.99, 
    description: "Give your videos a Hollywood look with these cinematic color grading presets.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 5, 
    name: "Motion Graphics Essentials", 
    type: "After Effects Bundle", 
    category: "Motion Graphics",
    price: 59.99, 
    description: "A versatile collection of motion graphics elements to enhance your videos.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 6, 
    name: "Sound FX Library", 
    type: "Editing Pack", 
    category: "Audio",
    price: 24.99, 
    description: "A comprehensive library of high-quality sound effects for any project.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  { 
    id: 7, 
    name: "4K Stock Footage Collection", 
    type: "Stock Footage", 
    category: "Video Assets",
    price: 79.99, 
    description: "A diverse collection of high-quality 4K stock footage for your projects.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  },
  { 
    id: 8, 
    name: "Green Screen Backgrounds Pack", 
    type: "Video Assets", 
    category: "Video Effects",
    price: 44.99, 
    description: "A collection of high-quality green screen backgrounds for easy compositing.",
    image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
]

export const categories = Array.from(new Set(products.map(product => product.category)))

