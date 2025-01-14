'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface SubProduct {
  name: string;
  image: string;
  pdf: string;
}

interface Product {
  name: string;
  image: string;
  subProducts: SubProduct[];
}

const products: Product[] = [
  {
    name: 'LLPP Rotomoulding ',
    image: '/black.png',
    subProducts: [
      { name: 'PP Sub 1', image: '/black.png', pdf: '/PP-Sub1-Report.pdf' },
      { name: 'PP Sub 2', image: '/black.png', pdf: '/PP-Sub2-Report.pdf' },
      { name: 'PP Sub 3', image: '/black.png', pdf: '/PP-Sub3-Report.pdf' },
      { name: 'PP Sub 4', image: '/black.png', pdf: '/PP-Sub4-Report.pdf' },
      { name: 'PP Sub 5', image: '/black.png', pdf: '/PP-Sub5-Report.pdf' },
    ],
  },
  {
    name: 'LLDP Powder',
    image: '/blue.png',
    subProducts: [
      { name: 'HIPS Sub 1', image: '/blue.png', pdf: '/HIPS-Sub1-Report.pdf' },
      { name: 'HIPS Sub 2', image: '/blue.png', pdf: '/HIPS-Sub2-Report.pdf' },
      { name: 'HIPS Sub 3', image: '/blue.png', pdf: '/HIPS-Sub3-Report.pdf' },
      { name: 'HIPS Sub 4', image: '/blue.png', pdf: '/HIPS-Sub4-Report.pdf' },
      { name: 'HIPS Sub 5', image: '/blue.png', pdf: '/HIPS-Sub5-Report.pdf' },
    ],
  },
  {
    name: 'Blow Granuels',
    image: '/green.png',
    subProducts: [
      { name: 'LDPE Sub 1', image: '/green.png', pdf: '/LDPE-Sub1-Report.pdf' },
      { name: 'LDPE Sub 2', image: '/green.png', pdf: '/LDPE-Sub2-Report.pdf' },
      { name: 'LDPE Sub 3', image: '/green.png', pdf: '/LDPE-Sub3-Report.pdf' },
      { name: 'LDPE Sub 4', image: '/green.png', pdf: '/LDPE-Sub4-Report.pdf' },
      { name: 'LDPE Sub 5', image: '/green.png', pdf: '/LDPE-Sub5-Report.pdf' },
    ],
  },
  {
    name: 'Roto Moulding Powder',
    image: '/orange.png',
    subProducts: [
      { name: 'HDPE Sub 1', image: '/orange.png', pdf: '/HDPE-Sub1-Report.pdf' },
      { name: 'HDPE Sub 2', image: '/orange.png', pdf: '/HDPE-Sub2-Report.pdf' },
      { name: 'HDPE Sub 3', image: '/orange.png', pdf: '/HDPE-Sub3-Report.pdf' },
      { name: 'HDPE Sub 4', image: '/orange.png', pdf: '/HDPE-Sub4-Report.pdf' },
      { name: 'HDPE Sub 5', image: '/orange.png', pdf: '/HDPE-Sub5-Report.pdf' },
    ],
  },
  {
    name: 'LLDPE Granules',
    image: '/red.png',
    subProducts: [
      { name: 'LLDPE Sub 1', image: '/red.png', pdf: '/LLDPE-Sub1-Report.pdf' },
      { name: 'LLDPE Sub 2', image: '/red.png', pdf: '/LLDPE-Sub2-Report.pdf' },
      { name: 'LLDPE Sub 3', image: '/red.png', pdf: '/LLDPE-Sub3-Report.pdf' },
      { name: 'LLDPE Sub 4', image: '/red.png', pdf: '/LLDPE-Sub4-Report.pdf' },
      { name: 'LLDPE Sub 5', image: '/red.png', pdf: '/LLDPE-Sub5-Report.pdf' },
    ],
  },
];

const OurProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
      <motion.div 
        className="flex justify-center" 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              className="bg-card rounded-lg overflow-hidden shadow-lg flex flex-col items-center p-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedProduct(selectedProduct === product ? null : product)}
            >
              <div className="w-40 h-40 relative mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
              </div>
              <motion.button
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-base font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                View Sub-Products
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-card rounded-lg p-6 w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">{selectedProduct.name} Sub-Products</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {selectedProduct.subProducts.map((subProduct, i) => (
                  <motion.div
                    key={subProduct.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Link href={subProduct.pdf} target="_blank" rel="noopener noreferrer">
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 relative mb-2">
                          <Image
                            src={subProduct.image}
                            alt={subProduct.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <p className="text-sm text-center">{subProduct.name}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.button
                className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-full text-base font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default OurProducts

