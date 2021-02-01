const util = require('util');
const fs = require('fs');
const express = require('express');

const router = express.Router();

const readFileAsync = util.promisify(fs.readFile);

/**
 * Higher-order fall sem umlykur async middleware með villumeðhöndlun.
 *
 * @param {function} fn Middleware sem grípa á villur fyrir
 * @returns {function} Middleware með villumeðhöndlun
 */
function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

/**
 * Les gögn async úr JSON skrá.
 *
 * @returns {object} Gögn úr JSON skrá
 */
async function readJSON() {
  // Byrjum á að lesa skjalið (videos.json) sem staðsett er í möppunni fyrir neðan
  const file = await readFileAsync('./videos.json');
  // Notum JSON til vinna skrárnar
  const json = JSON.parse(file);
  // Skilum gögnunum úr JSON skránni (videos.json)
  return json;
}

/**
 * Route handler sem birtir heimasíðuna.
 *
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 */
async function videoHome(req, res) {
  const title = 'Fræðslumyndbandaleigan';
  const json = await readJSON();
  //Skilgreinum listana sem við ætlum að lesa úr JSON skjalinu
  const { videos, categories } = json;
  //The res.render() function is used to render a view and sends the rendered HTML string to the client.
  res.render('videos', { title, videos, categories });
}
/**
 * Leitar í JSON skjali af id, ef id er til skilar skilar hún video annars false
 * 
 * @param {*} id Auðkenni myndbands í videos
 * @param {*} videos Listi myndbanda þar sem hvert og eitt myndband hefur tilteknar upplýsingar
 */
async function videoSearchFor(videos, id){
  let _video;
  const _id = Number(id);
  videos.forEach(video => {
    if(video.id == _id){
      _video = video;
    }
  });
    if(_video == video){
      return _video;
    }
    else{
      return false;
    }
}

/**
 * Route handler sem birtir videosíðu
 * Ef efni finnst ekki fer beiðnin í 404 handler
 *
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 * @param {function} next Næsta middleware
 */
async function videoPage(req, res, next) {
  const { slug } = req.params;
  if (slug != 'video'){
    return next();
  }

  const json = await readJSON();
  const { videos } = json;
  const { id } = req.query;
  const videoFound = videoSearchFor(videos, id);

  if(!videoFound){
    next();
  }

  const { title } = videoFound;

  return res.render('video', { title, videoFound, videos });
}

router.get('/', catchErrors(videoHome));
router.get('/:slug', catchErrors(videoPage));

module.exports = router;
