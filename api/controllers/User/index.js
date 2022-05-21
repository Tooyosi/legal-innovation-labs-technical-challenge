const { dbErrorHandler } = require('../../helpers')
const DbHelpers = require("../../helpers/DbHelpers")
let dbHelper = new DbHelpers()

module.exports = {
    getUser: ('/', async (req, res) => {
        try {
            await dbHelper.getSingleInstance("user", {
                where: {
                    id: req.user.id,
                },
                attributes: { exclude: ['password'] },
            }, res)
        } catch (error) {
            dbErrorHandler(error)
        }
    })
}

