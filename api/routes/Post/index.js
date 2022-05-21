const express = require('express');
const router = express.Router({ mergeParams: true });
const PostController = require('../../controllers/Post/index');
const { authenticate, protected } = require('../../middleware');

/**
 * @openapi
 * tags:
 *   name: Post
 *   description: Post Routes
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT 
 *   schemas:
 *     AddPost:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         body:
 *           type: string
 *       required: [ title, body ]
 *     EditPost:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         body:
 *           type: string
 */

/**
* @openapi
* /post:
*   get:
*     summary:  Get blog Post Route .
*     tags: [Post]
*     description: This route creates fetches blog posts.
*     consumes:
*       — application/json
*     security:
*       - bearerAuth: []
*     parameters:
*       - name: title
*         in: query
*         description: Post title.
*         schema:
*           type : string
*       - name: createdAt
*         in: query
*         description: Post date created.
*         schema:
*           type : string
*       - name: userId
*         in: query
*         description: Post author.
*         schema:
*           type : string
*       - name: offset
*         in: query
*         description: offset.
*         schema:
*           type : string
*       - name: limit
*         in: query
*         description: limit.
*         schema:
*           type : string
*     responses: 
*       200:
*         description: Receive back the post details.
*       400:
*         description: Bad Request.
*/
router.get('/',  PostController.getPosts)


/**
* @openapi
* /post:
*   post:
*     summary:  Create Blog Post Route .
*     tags: [Post]
*     description: This route creates a new blog post.
*     consumes:
*       — application/json
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/AddPost"
*     responses: 
*       200:
*         description: Receive back the post details.
*       400:
*         description: Bad Request.
*/
router.post('/', authenticate, protected, PostController.addPost)

/**
* @openapi
* /post/{id}:
*   get:
*     summary:  Get Single Blog Post Route .
*     tags: [Post]
*     description: This route fetches a blog post.
*     consumes:
*       — application/json
*     security:
*       - bearerAuth: []
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: Post Id.
*         schema:
*           type : integer
*           format: int64
*           minimum: 1
*     responses: 
*       200:
*         description: Receive back the post details.
*       400:
*         description: Bad Request.
*/
router.get('/:id',  PostController.getPost)



/**
* @openapi
* /post/{id}:
*   patch:
*     summary:  Edit Blog Post Route .
*     tags: [Post]
*     description: This route edits an already created blog post.
*     consumes:
*       — application/json
*     security:
*       - bearerAuth: []
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: Post Id.
*         schema:
*           type : integer
*           format: int64
*           minimum: 1
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/EditPost"
*     responses: 
*       200:
*         description: Receive back the post details.
*       400:
*         description: Bad Request.
*/
router.patch('/:id', authenticate, protected, PostController.editPost)

/**
* @openapi
* /post/{id}:
*   delete:
*     summary:  Delete Blog Post Route .
*     tags: [Post]
*     description: This route deletes a blog post.
*     consumes:
*       — application/json
*     security:
*       - bearerAuth: []
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: Post Id.
*         schema:
*           type : integer
*           format: int64
*           minimum: 1
*     responses: 
*       200:
*         description: Receive back success details.
*       400:
*         description: Bad Request.
*/
router.delete('/:id', authenticate, protected, PostController.deletePost)


module.exports = router;