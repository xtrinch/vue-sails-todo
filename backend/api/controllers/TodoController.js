/**
 * TodoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  get: async (req, res) => {
    const page = req.param('page')

    const numrows = await Todo
      .count()
      .catch(error => res.serverError(error))

    const todos = await Todo
      .find()
      .paginate({page, limit: 6})
      .catch(error => res.serverError(error))

    return res.json({
      todos,
      numrows
    })
  },

  post: async (req, res) => {
  	sails.log.info('Post received', req)

    const basket = await Todo
      .create(req.body)
      .catch(error => res.serverError(error))

    sails.log.info('Created todo', basket)
    return res.ok()
  },

  put: async (req, res) => {
    const basket = await Todo
      .update(req.body)
      .catch(error => res.serverError(error))

    sails.log.info('Updated todo', basket)
    return res.ok()
  },

};

