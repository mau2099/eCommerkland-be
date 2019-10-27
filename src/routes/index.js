const express = require('express');
const path = require('path');
const ProductService = require('../services');
const receipt = '../assets/receipt.pdf';

const platziStore = app => {
  const router = express.Router();
  app.use('/api/', router);

  const productService = new ProductService();

  router.get('/', (req, res) => {
    res.send(`API v2`);
  });

  router.get('/receipts', (req, res, next) => {
    let file = path.join(__dirname, receipt);
    res.sendFile(file);
  });

  router.get('/products', async (req, res, next) => {
    const storeProducts = await productService.getProducts();
    res.status(200).json({
      data: storeProducts,
      message: 'products listed',
    });
  });

  router.get('/products/:productId', async function(req, res, next) {
    const { productId } = req.params;

    try {
      const storeProducts = await productService.getProduct({ productId });

      res.status(200).json({
        data: storeProducts,
        message: 'product listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/products', async function(req, res, next) {
    const { body: product } = req;
    try {
      const createProductId = await productService.createProduct({ product });

      res.status(201).json({
        data: createProductId,
        message: 'product created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/products/:productId', async function(req, res, next) {
    const { productId } = req.params;
    const { body: product } = req;
    try {
      const updateProductId = await productService.updateProduct({
        productId,
        product,
      });
      res.status(200).json({
        data: updateProductId,
        message: 'product updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/products/:productId', async function(req, res, next) {
    const { productId } = req.params;
    try {
      const deleteProductId = await productService.deleteProduct({ productId });
      res.status(200).json({
        data: deleteProductId,
        message: 'product deleted',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('*', (req, res) => {
    res.status(404).send('Error 404');
  });
};

module.exports = platziStore;
