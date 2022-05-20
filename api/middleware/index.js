const expressJwt = require('express-jwt');
const authenticate = expressJwt({ secret: process.env.SESSION_SECRET, algorithms: ['sha1', 'RS256', 'HS256'], });
const BaseResponse = require('../helpers/ResponseClass')
const { failureCode, failedStatus } = require('../helpers/index')


module.exports = {
    protected: async (err, req, res, next) => {
        if (err.name === 'UnauthorizedError') {
            let response = new BaseResponse(failedStatus, err.message ? err.message.toString() : 'Invalid Token', failureCode, {})
            res.status(401).send(response);
        }
    },
    authenticate: authenticate,
    isAdmin: async (req, res, next) => {
        if (!req.user.isAdmin) {
            let response = new BaseResponse(failedStatus, 'Invalid Operation, You need to be an Admin to perform this operation', failureCode, {})
            res.status(401).send(response);
        } else {
            next()
        }
    }
}