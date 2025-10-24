import { storageService } from './localStorage';
import { products as defaultProducts } from '../data/products';

export function initializeDefaultData() {
  const existingProducts = storageService.getProducts();

  if (existingProducts.length === 0) {
    const productsWithMetadata = defaultProducts.map(p => ({
      ...p,
      createdBy: 'system'
    }));
    storageService.saveProducts(productsWithMetadata);
  }
}
