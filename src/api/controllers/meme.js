const Meme = require('../models/meme');

const getMemes = async (req, res, next) => {
  try {
    const memes = await Meme.find();
    return res.status(200).json(memes);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postMemes = async (req, res, next) => {
  try {
    const newMeme = new Meme(req.body);
    if (req.file) {
      newMeme.image = req.file.path;
    }
    const memeSaved = await newMeme.save();
    return res.status(201).json(memeSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteMeme = async (req, res, next) => {
  try {
    const { id } = req.params;

    const memeDeleted = await Meme.findByIdAndDelete(id);
    deletefile(memeDeleted.image);
    return res.status(200).json({ mensaje: 'Elemento eliminado', memeDeleted });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { getMemes, postMemes, deleteMeme };
