const multer = require('multer');
const getStorage = require('../config/Storage');

const storage = getStorage('Proyecto 8 API REST FILE');

const upload = multer({ storage });
module.exports = upload;
