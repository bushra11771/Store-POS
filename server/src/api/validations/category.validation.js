const Joi = require('joi');

module.exports = {
  // GET /v1/categories
  listCategories: {
    query: {
      page: Joi.number().min(1),
      perPage: Joi.number().min(1).max(100),
      name: Joi.string(),
    },
  },

  // POST /v1/categories
  createCategory: {
    body: {
      name: Joi.string().max(128),
    },
  },

  // PUT /v1/categories/:categoryId
  replaceCategory: {
    body: {
      name: Joi.string().max(128),
    },
    params: {
      categoryId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    },
  },

  // PATCH /v1/categories/:categoryId
  updateCategory: {
    body: {
      name: Joi.string().max(128),
    },
    params: {
      categoryId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    },
  },
};
