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
 * @returns {object} Gögnum úr JSON skrá
 */
async function readList() {
  // Byrjum á að lesa skjalið (videos.json) sem staðsett er í möppunni fyrir neðan
  const file = await readFileAsync('./videos.json');
  // Notum JSON til vinna skrárnar
  const json = JSON.parse(file);
  // Skilum gögnunum úr JSON skránni (videos.json)
  return json;
}

/**
 * Route handler sem birtir lista af myndböndum.
 *
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 */
async function list(req, res) {
  const title = 'Fræðslumyndbandaleigan';
  const json = await readList();
  const { videos } = json;

  res.render('videos', { title, videos });
}

/**
 * Route handler sem birtir myndband. Ef myndband finnst ekki í JSON skrá
 * er kallað í next() sem mun enda í 404 handler.
 *
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 * @param {function} next Næsta middleware
 */
async function video(req, res, next) {
  const { slug } = req.params;

  const json = await readList();
  const { videos } = json;

  const foundVideo = videos.find((a) => a.slug === slug);

  if (!foundVideo) {
    // Sendum í 404 handler
    return next();
  }

  const { title } = foundVideo;

  return res.render('video', { title, video: foundVideo });
}
router.get('/', catchErrors(list));
router.get('/:slug', catchErrors(video));

module.exports = router;
