const crypto = require('crypto')

module.exports = {
    bin2hashData: (data, key) => {
        let genHash = crypto.createHmac('sha512', key).update(data, "ascii").digest('hex')
        return genHash
    },
    failureCode: "99",
    successCode: "00",
    failedStatus: "Failed",
    errorStatus: "Failed",
    successStatus: "Success"
}