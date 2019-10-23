const { productsMock } = require('../utils/mocks');

class ProductService {
  async getProducts() {
    const products = await Promise.resolve(productsMock);
    return products || [];
  }
}

module.exports = ProductService;
