const path = require('path');
const express = require('express');
const videos = require('./src/videos');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// App locals
app.locals.util = require('./src/util');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', videos);

/**
 * Middleware sem sér um 404 villur.
 * Tekið úr sýnilausn 2019
 *
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 * @param {function} next Næsta middleware
 */
function notFoundHandler(req, res, next) { // eslint-disable-line
  const title = 'Síða fannst ekki';
  const message = 'Efnið sem þú sóttist eftir að finna hér er því miður er ekki til';
  res.status(404).render('error', { title, message });
}

/**
 * Middleware sem sér um villumeðhöndlun.
 * Tekið úr sýnilausn 2019
 *
 * @param {object} err Villa sem kom upp
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 * @param {function} next Næsta middleware
 */
function errorHandler(err, req, res, next) { // eslint-disable-line
  // console.error(err);
  const title = 'Villa kom upp';
  const message = 'Smá tæknivandamál okkar megin, afsakið';
  res.status(500).render('error', { title, message });
}

app.use(notFoundHandler);
app.use(errorHandler);

// Útbúum breytur fyrir hostname og port og skilgreinum þær
const hostname = '127.0.0.1';
const port = 3000;

// Skilum upplýsingunum um hvar verkefnið sé keyrt með console (til aðstoðar)
app.listen(port, hostname, () => {
  // Þetta er warning sem kemur upp í npm testinu... Fínst fínt að hafa þetta... 
  console.info(`Server running at http://${hostname}:${port}/`);
});
