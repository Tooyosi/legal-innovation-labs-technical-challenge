const express = require('express');
const router = express.Router({ mergeParams: true });
const UserController = require('../../controllers/User/index');
const { authenticate, protected } = require('../../middleware');

/**
 * @openapi
 * tags:
 *   name: User
 *   description: User Routes
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT 
 */

/**
* @openapi
* /user:
*   get:
*     summary:  User Profile Route .
*     tags: [User]
*     description: This route fetches the logged in user.
*     consumes:
*       — application/json
*     security:
*       - bearerAuth: []
*     responses: 
*       200:
*         description: Receive back User details.
*       400:
*         description: Bad Request.
*/
router.get('/', authenticate, protected, UserController.getUser);



module.exports = router;