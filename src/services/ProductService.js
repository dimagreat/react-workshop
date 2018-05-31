const PRODUCTS_URL = 'http://localhost:7777/products'

class ProductService {
  getProducts(filter = '') {
    return fetch(`${PRODUCTS_URL}${filter}`)
      .then((response) => response.json())
      .then((data) => data)
  }
}

export default new ProductService();