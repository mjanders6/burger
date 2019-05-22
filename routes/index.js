const { getAllBurgers, addABurger, devourABurger, adminBurgers, adminRemoveBurger } = require('../controller/burgers_controller.js')

module.exports = app => {
  // for heroku
  // app.get("/", function(req, res) {
  //   res.json(path.join(__dirname, "public/index.html"));
  // });
  
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
  // admin 
  app.get('/burgers/admin', (req, res) => {
    adminBurgers(res)
  })
  // admin remove
  app.delete('/burgers/admin/:id', (req, res) => {
    adminRemoveBurger(req, res, req.params.id)
  })
}
