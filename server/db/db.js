const Sequelize = require('sequelize')
const config = require('./config.js')

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  {
    host: config.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    }
  }
)

const Pet = sequelize.define('pet', {
  id: {
    type: Sequelize.INTEGER(10),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  type: Sequelize.STRING(100),
  weight: Sequelize.FLOAT(4, 2)
}, {
  tableName: 'pets_table',
  timestamps: false
})

/** *
//增删查改基本功能
const createData = async (model, data) => {
  await model.create(data)
}

const queryData = async (model, condition) => {
  let r = await model.findAll({
    where: condition
  })
  return r
}

const updateData = async (model, condition, data) => {
  let models = await queryData(model, condition)
  for (let item of models) {
    for (let key in data) {
      item[key] = data[key]
    }
    await item.save()
  }
}

const delData = async (model, condition) => {
  let models = await queryData(model, condition)
  for (let item of models) {
    await item.destroy()
  }
}

updateData(Pet, {type: '蟑螂'}, {name: '张大强'})
// createData(Pet, {id: 1, name: '小强', type: '蟑螂', weight: 0.45})
/** */

