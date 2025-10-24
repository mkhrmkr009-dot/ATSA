import { useState, useEffect } from 'react';
import { storageService, Product } from '../utils/localStorage';
import { products as defaultProducts } from '../data/products';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    let storedProducts = storageService.getProducts();

    if (storedProducts.length === 0) {
      const productsWithMetadata = defaultProducts.map(p => ({
        ...p,
        createdBy: 'system'
      }));
      storageService.saveProducts(productsWithMetadata);
      storedProducts = productsWithMetadata;
    }

    setProducts(storedProducts.filter(p => p.isActive).sort((a, b) => a.orderIndex - b.orderIndex));
  };

  return { products, reload: loadProducts };
}
