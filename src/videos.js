const util = require('util');
const fs = require('fs');
const express = require('express');

const router = express.Router();

const readFileAsync = util.promisify(fs.readFile);

/**
 * Higher-order fall sem umlykur async middleware með villumeðhöndlun.
 * Tekið úr sýnilausn 2019 
 *
 * @param {function} fn Middleware sem grípa á villur fyrir
 * @returns {function} Middleware með villumeðhöndlun
 */
function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

/**
 * Les gögn async úr JSON skrá.
 * Tekið úr sýnilausn 2019 (breytti bara vísun í skja: ./videos.json)
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
 * Route handler heimasíðu myndbanda
 * Tekið úr sýnilausn 2019 breytti bara því sem ég ætla að sækja í json skjalið
 * þ.e. videos og categories. Auk þess því sem ég mun rendera
 *
 * @param {*} res Response hlutur
 */
async function videoHome(req, res) {
  const title = 'Fræðslumyndbandaleigan';
  const json = await readJSON();
  // Skilgreinum listana sem við ætlum að lesa úr JSON skjalinu
  const { videos, categories } = json;
  /**  The res.render() function is used to render a view and sends the
  *    rendered HTML string to the client.
  */
  return res.render('videos', { title, videos, categories });
}

/**
 * Leitar í JSON skjali af id ef hún finnur það skilast id annars false
 * Bætt við
 *
 * @param {*} id Auðkenni myndbands í videos
 * @param {*} videos Listi myndbanda þar sem hvert og eitt myndband hefur tilteknar upplýsingar
 */
async function videoSearchFor(videos, id) {
  let videoN;
  const idN = Number(id);
  videos.forEach((video) => {
    if (video.id === idN) {
      videoN = video;
    }
  });
  if (videoN) {
    return videoN;
  }

  return false;
}

/**
 * Route handler sem birtir videosíðu
 * Ef efni finnst ekki fer beiðnin í 404 handler
 * Tekið úr sýnilausn 2019 
 * notaði slug til að finna video
 *
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 * @param {function} next Næsta middleware
 */
async function videoPage(req, res, next) {
  const { slug } = req.params;
  // Hérna sendir slug villu ef fyrirspurn skilar ekki video
  if (slug !== 'video') {
    return next();
  }

  const json = await readJSON();
  const { videos } = json;
  const { id } = req.query;
  const video = await videoSearchFor(videos, id);

  if (!video) {
    next();
  }

  const { title } = video;
  res.render('video', { title, video, videos });
  return 0;
}

router.get('/', catchErrors(videoHome));
router.get('/:slug', catchErrors(videoPage));

//Virkar ekki, fann ekki út afhverju
module.exports = router;
