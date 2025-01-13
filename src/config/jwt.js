const jwt = require('jsonwebtoken');
// crear llave
const generateSing = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// comprobar si esa llave fue creada por nosotros
const verifyjwt = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateSing, verifyjwt };
