const productsMock = [
  {
    id: '1',
    image:
      'https://firebasestorage.googleapis.com/v0/b/geekblog-e745e.appspot.com/o/chai-latte-cupcakes.jpg?alt=media&token=9ae8de8f-ec28-4ca5-b8f0-2066e021c000',
    title: 'Red Velvet',
    price: 62.5,
    description: 'Cupcake Red Velvet',
  },
  {
    id: '3',
    image:
      'https://firebasestorage.googleapis.com/v0/b/geekblog-e745e.appspot.com/o/cookies-cupcake.png?alt=media&token=1d966cdb-4144-4ca1-9ce2-062d0ed4a51e',
    title: 'Cookies',
    price: 58.7,
    description: 'Cupcake Cookies & Cream',
  },
  {
    id: '4',
    image:
      'https://firebasestorage.googleapis.com/v0/b/geekblog-e745e.appspot.com/o/red-velvet-cupcake.jpg?alt=media&token=36e8ae27-85d5-4437-9970-584d208c6031',
    title: 'Cupcake Rosa',
    price: 42,
    description: 'Cupcake Rosa',
  },
  {
    id: '5',
    image:
      'https://firebasestorage.googleapis.com/v0/b/geekblog-e745e.appspot.com/o/rosa-cupcake.jpg?alt=media&token=f77c6133-d282-4c9d-880a-18a6f0b39c17',
    title: 'Cupcake Unicornio',
    price: 53.4,
    description: 'Cupcake de Unicornio',
  },
  {
    id: '6',
    image:
      'https://firebasestorage.googleapis.com/v0/b/geekblog-e745e.appspot.com/o/unicorn-cupcake.jpg?alt=media&token=7eeae162-98bb-48b1-8008-dcd782ca6ddb',
    title: 'Cupcake Vainilla',
    price: 28,
    description: 'Cupcake de Vainilla',
  },
  {
    id: '7',
    image:
      'https://firebasestorage.googleapis.com/v0/b/geekblog-e745e.appspot.com/o/vainilla-cupcake.jpg?alt=media&token=5dfdd3a3-0f32-493b-b8fa-bb68844a5fc0',
    title: 'Cupcake Chai Latte',
    price: 39,
    description: 'Cupcake Chai Latte',
  },
];

class ProductsServiceMock {
  async getProducts() {
    return Promise.resolve(productsMock);
  }
}

module.exports = {
  productsMock,
  ProductsServiceMock,
};
