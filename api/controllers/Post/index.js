const { user } = require("../../models/index");
const { isValueEmpty, addToObject, dbErrorHandler } = require("../../helpers")
const DbHelpers = require("../../helpers/DbHelpers");
const Response = require("../../helpers/ResponseClass");
const { logger } = require("../../loggers/logger");

let dbHelper = new DbHelpers();

module.exports = {
    addPost: ('/', async (req, res) => {
        let { title, body } = req.body
        if (isValueEmpty("Title", title, res)) return
        if (isValueEmpty("Body", body, res)) return
        try {
            await dbHelper.createNewInstance("post", {
                title: title,
                body: body,
                userId: req.user.id
            }, res)
        } catch (error) {
            dbErrorHandler(error, res)
        }

    }),

    editPost: ('/', async (req, res) => {
        const { id } = req.params
        let { title, body } = req.body
        let editObj = {}
        addToObject("title", title, editObj)
        addToObject("body", body, editObj)
        try {
            await dbHelper.editInstance("post", {
                where: {
                    id: id,
                    userId: req.user.id
                }
            }, {
                ...editObj
            }, res)
        } catch (error) {
            dbErrorHandler(error, res)
        }
    }),

    getPosts: ('/', async (req, res) => {
        let { title, createdAt, userId, offset, limit } = req.query
        let whereObj = {}

        addToObject("title", title, whereObj)
        addToObject("createdAt", createdAt, whereObj)
        addToObject("userId", userId, whereObj)
        try {
            await dbHelper.getPaginatedInstance("post", {
                where: whereObj,
                include: {
                    model: user,
                    as: 'user',
                    attributes: ['firstName', 'lastName', 'email']
                },
                offset: offset ? Number(offset) : offset,
                limit: limit ? Number(limit) : 10,
                order: [['id', 'DESC']],
            }, res)
        } catch (error) {
            dbErrorHandler(error, res)
        }
    }),

    getPost: ('/', async (req, res) => {
        const { id } = req.params
        
        try {
            await dbHelper.getSingleInstance("post", {
                where: {
                    id: id
                },
                include: {
                    model: user,
                    as: 'user',
                    attributes: ['firstName', 'lastName', 'email']
                }
            }, res)
        } catch (error) {
            dbErrorHandler(error, res)
        }
    }),
    

    deletePost: ('/', async (req, res) => {
        try {
            let { id } = req.params

            await dbHelper.deleteInstance("post", {
                where: {
                    id: id,
                    userId: req.user.id
                }
            }, res)

        } catch (error) {
            dbErrorHandler(error, res)
        }
    }),
}

