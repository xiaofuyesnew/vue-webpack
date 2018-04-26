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
  timestamps: false
})

//增加数据
/** *
!(async () => {
  const cat = await Pet.create({
    id: 5,
    name: '毛毛',
    type: '兔子',
    weight: 4.18
  })
  return console.log(`创建了${JSON.stringify(cat)}`)
})()
/** */

!(async () => {
  const pets = await Pet.findAll({
    where: {
      id: 3
    }
  })
  for (let p of pets) {
    console.log(JSON.stringify(p))
  }
})()