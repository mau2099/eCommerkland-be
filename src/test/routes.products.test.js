const assert = require('assert');
const proxyquire = require('proxyquire');

const { productsMock, ProductsServiceMock } = require('../utils/mocks.js');
const testServer = require('../utils/testServer');

describe('routes - products', function() {
  const route = proxyquire('../routes/index', {
    '../services/index': ProductsServiceMock,
  });

  const request = testServer(route);
  describe('GET /api/products', function() {
    it('should respond with status 200', function(done) {
      request.get('/api/products').expect(200, done);
    });

    it('should respond with the list of products', function(done) {
      request.get('/api/products').end((err, res) => {
        assert.deepEqual(res.body, {
          data: productsMock,
          message: 'products listed',
        });

        done();
      });
    });
  });
});
