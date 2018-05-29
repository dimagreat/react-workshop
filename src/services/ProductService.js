import mock from './mock';

class ProductService {
  getProducts() {
    return Promise.resolve(mock)
  }
}

export default new ProductService();