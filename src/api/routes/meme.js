const upload = require('../../middlewares/file');
const { getMemes, postMemes, deleteMeme } = require('../controllers/meme');

const memesRouter = require('express').Router();

memesRouter.get('/', getMemes);
memesRouter.post('/', upload.single('imag'), postMemes);
memesRouter.delete('/:id', deleteMeme);

module.exports = memesRouter;
