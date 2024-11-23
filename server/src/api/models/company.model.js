const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const APIError = require('../errors/api-error');

/**
 * User Roles
 */
const roles = ['user', 'admin'];

/**
 * User Schema
 * @private
 */
const companySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    name: {
      type: String,
      maxlength: 128,
      index: true,
      trim: true,
      require: true,
    },
    picture: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      maxlength: 255,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

/**
 * Methods
 */
companySchema.method({
  transform() {
    const transformed = {};
    const fields = ['id', 'name', 'email', 'picture', 'createdAt'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

/**
 * Statics
 */
companySchema.statics = {
  roles,

  /**
   * Get Company
   *
   * @param {ObjectId} id - The objectId of company.
   * @returns {Promise<User, APIError>}
   */
  async get(id) {
    let company;

    if (mongoose.Types.ObjectId.isValid(id)) {
      company = await this.findById(id).exec();
    }
    if (company) {
      return company;
    }

    throw new APIError({
      message: 'Company does not exist',
      status: httpStatus.NOT_FOUND,
    });
  },

  /**
   * List users in descending order of 'createdAt' timestamp.
   *
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<User[]>}
   */
  list({
    page = 1, perPage = 30, name, email, role,
  }) {
    const options = omitBy({ name, email, role }, isNil);

    return this.find(options)
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .exec();
  },

  /**
   * Return new validation error
   * if error is a mongoose duplicate key error
   *
   * @param {Error} error
   * @returns {Error|APIError}
   */
  checkDuplicateEmail(error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      return new APIError({
        message: 'Validation Error',
        errors: [
          {
            field: 'email',
            location: 'body',
            messages: ['"Company email" already exists'],
          },
        ],
        status: httpStatus.CONFLICT,
        isPublic: true,
        stack: error.stack,
      });
    }
    return error;
  },
};

/**
 * @typedef Company
 */
module.exports = mongoose.model('Company', companySchema);
