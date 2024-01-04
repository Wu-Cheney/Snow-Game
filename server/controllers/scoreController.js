const db = require('../models/leaderboardModel');

const scoreController = {};

scoreController.getScores = async (req, res, next) => {
  console.log('in score controller');
  try {
    console.log('in score controller');
    const queryStr = 'SELECT * FROM leaderboard ORDER BY score DESC LIMIT 10';
    const scores = await db.query(queryStr);
    console.log(scores);

    res.locals.scores = scores.rows;
    console.log('this is scores', scores);

    return next();
  } catch {
    next({ log: 'error in query selector' });
  }
};

scoreController.sendScore = async (req, res, next) => {
  try {
    const entry = req.body;
    const queryObj = {
      text: 'INSERT INTO leaderboard (name, score) VALUES ($1, $2)',
      values: [entry.name, entry.score],
    };
    const sentEntry = await db.query(queryObj);
    console.log('sentEntry', sentEntry);
    return next();
  } catch {
    next({ log: 'error in sendScore' });
  }
};

scoreController.restart = (req, res, next) => {
  console.log('inside restart controller');
  return next();
};

module.exports = scoreController;
