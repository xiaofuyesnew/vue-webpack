const APIError = require('../rest').APIError

let testData = [{
  name: 'iPhone',
  price: 6000
}, {
  name: 'iPad',
  price: 8000
}, {
  name: 'iWatch',
  price: 6000
}]

const fn_products = async (ctx) => {
  if (testData) { 
    ctx.rest(testData)
  } else {
    throw new APIError('product wrong', 'product wrong wrong wrong')
  }
  
}

module.exports = {
  'GET /api/products': fn_products
}