const Joi = require('@hapi/joi')
const embedSchema = require('./embedSchema.js')

const feedSchema = Joi.object({
  title: Joi.string().trim().max(256),
  channel: Joi.string().trim(),
  url: Joi.string().uri().trim(),
  checkTitles: Joi.boolean(),
  checkDates: Joi.boolean(),
  imgPreviews: Joi.boolean(),
  imgLinksExistence: Joi.boolean(),
  formatTables: Joi.boolean(),
  toggleRoleMentions: Joi.boolean(),
  text: Joi.string().allow('').trim().max(2048),
  embeds: Joi.array().items(embedSchema),
  split: Joi.object({
    char: Joi.string().trim().max(10),
    prepend: Joi.string().trim().max(100),
    append: Joi.string().trim().max(100),
    maxLength: Joi.number().max(2048).min(500)
  }),
  filters: Joi.object().pattern(/^/, Joi.array().items(Joi.string()))
})

module.exports = feedSchema
