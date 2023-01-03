import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { createCategories } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProducts } from './app/useCases/products/createProducts';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';
import { cancelCategories } from './app/useCases/categories/cancelCategories';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get('/categories', listCategories);

// Cancel Categories
router.delete('/categories/:categoryId', cancelCategories);

// Create Categories
router.post('/categories', createCategories);

// List products
router.get('/products', listProducts);

// Create Product
router.post('/products',upload.single('image'), createProducts);

// Get Products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders
router.get('/orders', listOrders);

// Create orders
router.post('/orders', createOrder);


// Change orders status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/Cancel order
router.delete('/orders/:orderId', cancelOrder);
