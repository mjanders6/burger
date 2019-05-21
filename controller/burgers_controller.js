const db = require('../config/index.js')

module.exports = {
    getAllBurgers(res) {
        db.query(`SELECT * FROM burgers`, (e, burgers) => {
            if (e) throw e
            res.render('index', { burgers })
            // res.send(burgers)
        })
    },
    addABurger(req, res) {
        db.query(`INSERT INTO burgers SET ?`, req.body, e => {
            if (e) throw e
            res.sendStatus(200)
        })
    },
    devourABurger(req, res, update) {
        db.query(`UPDATE burgers SET ? WHERE ?`, [{ devoured: req.body.devoured }, { id: update }], e => {
            if (e) throw e
            res.sendStatus(200)
        })
    },
    adminBurgers(res) {
        db.query(`SELECT * FROM burgers`, (e, burgers) => {
            if (e) throw e
            res.render('admin', { burgers })
            // res.send(burgers)
        })
    },
    adminRemoveBurger(req, res, update) {
        db.query('DELETE FROM burgers WHERE ?', [{ id: update }], e => {
            if (e) throw e
            res.sendStatus(200)
        })
    }

}