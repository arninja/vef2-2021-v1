const path = require('path');
const express = require('express');

const videos = require('./src/videos');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', videos);

/**
 * Middleware sem sér um 404 villur.
 *
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 * @param {function} next Næsta middleware
 */
function notFoundHandler(req, res, next) { // eslint-disable-line
  const title = 'Síða fannst ekki';
  const message = 'Efnið sem þú sóttist eftir er ekki til';
  res.status(404).render('error', { title, message });
}

/**
 * Middleware sem sér um villumeðhöndlun.
 *
 * @param {object} err Villa sem kom upp
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 * @param {function} next Næsta middleware
 */
function errorHandler(err, req, res, next) { // eslint-disable-line
  console.error(err);
  const title = 'Villa kom upp';
  const message = '';
  res.status(500).render('error', { title, message });
}

app.use(notFoundHandler);
app.use(errorHandler);

// Útbúum breytur fyrir hostname og port og skilgreinum þær
const hostname = '127.0.0.1';
const port = 3000;

// Prentum upplýsingarnar um hvar verkefnið sé keyrt
app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
