const crypto = require('crypto')
const { logger } = require('../loggers/logger')
const Response = require('./ResponseClass')

const FAILURE_CODE = "99";
const SUCCESS_CODE = "00";
const FAILURE_STATUS = "Failed";
const SUCCESS_STATUS = "Success";

module.exports = {
    bin2hashData: (data, key) => {
        let genHash = crypto.createHmac('sha512', key).update(data, "ascii").digest('hex')
        return genHash
    },
    failureCode: FAILURE_CODE,
    successCode: SUCCESS_CODE,
    failedStatus: FAILURE_STATUS,
    errorStatus: FAILURE_STATUS,
    successStatus: SUCCESS_STATUS,
    isValueEmpty: (name, value, res) => {
        let response
        if (!value || value.trim() == "") {
            response = new Response("Failed", `Validation error,${name} is required`, this.failureCode, {})
            res.status(400)
                .send(response)
            return true
        }
    },
    isEmailValid: (value, res) => {
        let response

        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (!filter.test(value)) {
            response = new Response(this.failedStatus, `Validation error,Email is invalid`, this.failureCode, {})
            res.status(400)
                .send(response)
            return true
        }
    },
    addToObject: (field, value, object = {}) => {
        if (value && value.trim() !== "") {
            object[field] = value
        }
    },
    dbErrorHandler: (error, res) => {
        logger.error(error.toString())
        const response = new Response(this.failedStatus, error.toString(), this.failureCode, {})
        return res.status(400)
            .send(response)
    }
}