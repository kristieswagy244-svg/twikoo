const { twikooHandler } = require('twikoo-func');
module.exports = async (req, res) => {
  await twikooHandler(req, res);
};
