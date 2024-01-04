const express = require('express');

const scoreController = require('../controllers/scoreController');

const router = express.Router();

router.get('/', scoreController.getScores, (req, res) =>
  res.status(200).json(res.locals.scores)
);

router.post('/gameover', scoreController.sendScore, (req, res) =>
  res.status(200)
);

router.post('/restart', scoreController.restart, (req, res) => res.status(200));

module.exports = router;
