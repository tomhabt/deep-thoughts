require('dotenv').config();

const secret = process.env.JWT_SECRET_KEY

module.exports = {secret:secret};
