const { getAllBurgers, addABurger, devourABurger } = require('../controller/burgers_controller.js')

module.exports = app => {
  // your routes here...
  app.get('/burgers', (req, res) => {
    getAllBurgers(res)
  })
  // add a new burger
  app.post('/burgers', (req, res) => {
    addABurger(req, res)
  })
  // devour a burger
  app.put('/burgers/:id', (req, res) => {
    devourABurger(req, res, req.params.id)
  })
}
