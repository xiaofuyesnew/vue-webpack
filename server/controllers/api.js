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
  ctx.rest({
    data: testData
  })
}

module.exports = {
  'GET /api/products': fn_products
}