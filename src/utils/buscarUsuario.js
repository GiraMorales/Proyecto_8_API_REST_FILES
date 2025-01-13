const User = require('../api/models/users');

const buscarUsuario = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName }); //busca el usuario por el nombre
    if (user);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { buscarUsuario };
