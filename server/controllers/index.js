const fn_hello = async (ctx) => {
  let name = ctx.params.name
  ctx.response.body = `hello, ${name}!`
}

const fn_index = async (ctx) => {
  ctx.response.body = 'Index'
}

module.exports = {
  'GET /': fn_index,
  'GET /hello/:name': fn_hello 
}