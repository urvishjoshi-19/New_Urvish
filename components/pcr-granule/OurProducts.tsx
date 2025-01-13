'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    name: 'PP Granules',
    image: '/black.png',
    subProducts: [
      { name: 'PP Sub 1', image: '/black.png', pdf: '/PP-Sub1-Report.pdf' },
      { name: 'PP Sub 2', image: '/black.png', pdf: '/PP-Sub2-Report.pdf' },
      { name: 'PP Sub 3', image: '/black.png', pdf: '/PP-Sub3-Report.pdf' },
      { name: 'PP Sub 4', image: '/black.png', pdf: '/PP-Sub4-Report.pdf' },
      { name: 'PP Sub 5', image: '/black.png', pdf: '/PP-Sub5-Report.pdf' },
    ],
  },
  // Other products here...
];

const OurProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.name}
            onClick={() => setSelectedProduct(selectedProduct === product ? null : product)}
          >
            <h3>{product.name}</h3>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div>
            <h3>{selectedProduct.name} Sub-Products</h3>
            <div>
              {selectedProduct.subProducts.map((subProduct: SubProduct) => (
                <div key={subProduct.name}>
                  <p>{subProduct.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurProducts;
