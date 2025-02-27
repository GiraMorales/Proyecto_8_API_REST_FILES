const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

function getStorage(folderName = 'default-folder') {
  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folderName,
      allowedFormats: ['jpg', 'png', 'gif', 'jpeg']
    }
  });
}

module.exports = getStorage;
