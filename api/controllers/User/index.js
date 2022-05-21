const { failedStatus, failureCode,  bin2hashData,  isValueEmpty, isEmailValid, dbErrorHandler } = require('../../helpers')
const Response = require("../../helpers/ResponseClass")
const { logger } = require('../../loggers/logger')
const DbHelpers = require("../../helpers/DbHelpers")
let dbHelper = new DbHelpers()

module.exports = {
    getUser: ('/', async (req, res) => {
        try {
            await dbHelper.getSingleInstance("user", {
                where: {
                    id: req.user.id,
                },
                attributes: {exclude: ['password']},
            }, res)
        } catch (error) {
            dbErrorHandler(error)
        }
    })
}

