const APIError = require('../rest').APIError
const models = require('../db/db.js')

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

const queryData = async (model, condition) => {
  let r = await model.findAll({
    where: condition
  })
  return r
}

const delData = async (model, condition) => {
  let models = await queryData(model, condition)
  for (let item of models) {
    await item.destroy()
  }
}

const fn_products = async (ctx) => {
  if (testData) { 
    ctx.rest(testData)
  } else {
    throw new APIError('product wrong', 'product wrong wrong wrong')
  }
}

const fn_del_pet = async (ctx) => {
  delData(models.Pet, {id: 1})
  ctx.rest({code: 1, msg: 'DEL OK'})
}

module.exports = {
  'GET /api/products': fn_products,
  'GET /api/delpet': fn_del_pet
}