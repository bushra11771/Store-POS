const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const APIError = require('../errors/api-error');
/**
 * category Schema
 * @private
 */
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 128,
      index: true,
      trim: true,
      unique: true,
      required: true,
    },

    picture: {
      type: String,
      trim: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

/**
 * Methods
 */
categorySchema.method({
  transform() {
    const transformed = {};
    const fields = ['id', 'name', 'picture', 'companyId', 'createdAt'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

/**
 * Statics
 */
categorySchema.statics = {
  /**
   * Get Category
   *
   * @param {ObjectId} id - The objectId of Category.
   * @returns {Promise<User, APIError>}
   */
  async get(id) {
    let category;

    if (mongoose.Types.ObjectId.isValid(id)) {
      category = await this.findById(id).exec();
    }
    if (category) {
      return category;
    }

    throw new APIError({
      message: 'Category does not exist',
      status: httpStatus.NOT_FOUND,
    });
  },

  /**
   * Return new validation error
   * if error is a mongoose duplicate key error
   *
   * @param {Error} error
   * @returns {Error|APIError}
   */
  checkDuplicateName(error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      return new APIError({
        message: 'Validation Error',
        errors: [
          {
            field: 'name',
            location: 'body',
            messages: ['"category name" already exists'],
          },
        ],
        status: httpStatus.CONFLICT,
        isPublic: true,
        stack: error.stack,
      });
    }
    return error;
  },

  /**
   * List categories in descending order of 'createdAt' timestamp.
   *
   * @param {number} skip - Number of categories to be skipped.
   * @param {number} limit - Limit number of categories to be returned.
   * @returns {Promise<Category[]>}
   */
  list({ page = 1, perPage = 30, name }) {
    const options = omitBy({ name }, isNil);

    return this.find(options)
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .exec();
  },
};

/**
 * @typedef Category
 */
module.exports = mongoose.model('Category', categorySchema);
