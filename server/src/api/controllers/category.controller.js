const httpStatus = require('http-status');
const Category = require('../models/category.model');

/**
 * Load user and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
  try {
    const category = await Category.get(id);
    req.locals = { category };
    return next();
  } catch (error) {
    return next(error);
  }
};

/**
 * Get category
 * @public
 */
exports.get = (req, res) => res.json(req.locals.category.transform());

/**
 * Get logged in category info
 * @public
 */
exports.loggedIn = (req, res) => res.json(req.category.transform());

/**
 * Create new category
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const category = new Category(req.body);
    const savedCategory = await category.save();
    res.status(httpStatus.CREATED);
    res.json(savedCategory.transform());
  } catch (error) {
    next(Category.checkDuplicateName(error));
  }
};

/**
 * Replace existing user
 * @public
 */
exports.replace = async (req, res, next) => {
  try {
    const { category } = req.locals;
    const newCategory = new Category(req.body);

    await category.updateOne(newCategory, { override: true, upsert: true });
    const savedCategory = await Category.findById(category._id);

    res.json(savedCategory.transform());
  } catch (error) {
    next(Category.checkDuplicateName(error));
  }
};

/**
 * Update existing user
 * @public
 */
exports.update = (req, res, next) => {
  const updatedUser = req.body;
  const category = Object.assign(req.locals.category, updatedUser);

  category
    .save()
    .then((savedCategory) => res.json(savedCategory.transform()))
    .catch((e) => next(Category.checkDuplicateEmail(e)));
};

/**
 * Get user list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const categories = await Category.list(req.query);
    const transformedCategories = categories.map((user) => user.transform());
    res.json(transformedCategories);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete user
 * @public
 */
exports.remove = (req, res, next) => {
  const { category } = req.locals;

  category
    .remove()
    .then(() => res.status(httpStatus.NO_CONTENT).end())
    .catch((e) => next(e));
};
