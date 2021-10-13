const { Logs } = require('../models')

exports.recordRequest = async (data) => {
  try {
    return await Logs.create(data);
  } catch (error) {
    throw error
  }
};