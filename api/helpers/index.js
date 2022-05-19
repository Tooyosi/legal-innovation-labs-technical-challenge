const crypto = require('crypto')
const Response = require('./ResponseClass')

module.exports = {
    bin2hashData: (data, key) => {
        let genHash = crypto.createHmac('sha512', key).update(data, "ascii").digest('hex')
        return genHash
    },
    failureCode: "99",
    successCode: "00",
    failedStatus: "Failed",
    errorStatus: "Failed",
    successStatus: "Success",
    isValueEmpty: (name, value, res) => {
        let response
        if (!value || value.trim() == "") {
            response = new Response("Failed", `Validation error,${name} is required`, "99", {})
            res.status(400)
                .send(response)
            return true
        }
    },
    isEmailValid: (value, res) => {
        let response

        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (!filter.test(value)) {
            response = new Response("Failed", `Validation error,Email is invalid`, "99", {})
            res.status(400)
                .send(response)
            return true
        }
    }
}