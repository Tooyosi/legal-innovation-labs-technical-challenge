const express = require('express');
const router = express.Router({ mergeParams: true });
const AuthController = require('../../controllers/Auth/index')

/**
 * @openapi
 * tags:
 *   name: Auth
 *   description: Auth Routes
 * components:
 *   schemas:
 *     UserLogin:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       required: [ email, password ]
 *     UserRegister:
 *       type: object
 *       properties:
 *         firstName: 
 *           type: string
 *         lastName: 
 *           type: string
 *         email: 
 *           type: string
 *         password: 
 *           type: string
 *       required: [ firstName, lastName, email, password ]
 */

/**
* @openapi
* /auth/login:
*   post:
*     summary:  Auth Login Route .
*     tags: [Auth]
*     description: This route authenticates the user.
*     consumes:
*       — application/json
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/UserLogin"
*     responses: 
*       200:
*         description: Receive back User details and auth token.
*       400:
*         description: Bad Request.
*/
router.post('/login', AuthController.postLogin)



/**
* @openapi
* /auth/signup:
*   post:
*     summary:  Auth Signup Route .
*     tags: [Auth]
*     description: This route signs up a new user.
*     consumes:
*       — application/json
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/UserRegister"
*     responses: 
*       200:
*         description: Receive back User details.
*       400:
*         description: Bad Request.
*/
router.post('/signup', AuthController.postSignup)

module.exports = router;