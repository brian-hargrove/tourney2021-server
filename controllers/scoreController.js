let Express = require('express');
let router = Express.Router();
let validateJWT = require('../middleware/validate-jwt');
const { ScoreModel } = require('../models');

//! SCORE CREATE
router.post('/create', validateJWT, async (req, res) => {
  const {
    date,
    time,
    tvStation,
    region,
    round,
    site,
    team1,
    score1,
    team2,
    score2,
  } = req.body.score;
  const { id } = req.user;
  const scoreEntry = {
    date,
    time,
    tvStation,
    region,
    round,
    site,
    team1,
    score1,
    team2,
    score2,
    owner: id,
  };
  try {
    const newScore = await ScoreModel.create(scoreEntry);
    res.status(200).json(newScore);
  } catch (err) {
    res.status(500).json({ error: err });
  }
  // ScoreModel.create(scoreEntry);
});

//! GET ALL SCORES

router.get('/', async (req, res) => {
  try {
    const scores = await ScoreModel.findAll();
    res.status(200).json(scores);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//! GET SCORES BY REGION
router.get('/:region', async (req, res) => {
  const { region } = req.params;
  try {
    const results = await ScoreModel.findAll({
      where: { region: region },
    });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//! UPDATE SCORES

router.put('/update/:scoreId', async (req, res) => {
  const {
    date,
    time,
    tvStation,
    region,
    round,
    site,
    team1,
    score1,
    team2,
    score2,
  } = req.body.score;
  const scoreId = req.params.scoreId;
  // const userId = req.user.id;

  const query = {
    where: {
      id: scoreId,
      // owner: userId,
    },
  };

  const updatedScore = {
    date: date,
    time: time,
    tvStation: tvStation,
    region: region,
    round: round,
    site: site,
    team1: team1,
    score1: score1,
    team2: team2,
    score2: score2,
  };

  try {
    const update = await ScoreModel.update(updatedScore, query);
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//! DELETE
router.delete('/delete/:scoreId', async (req, res) => {
  // const ownerId = req.user.id;
  const scoreId = req.params.scoreId;

  try {
    const query = {
      where: {
        id: scoreId,
        // owner: ownerId,
      },
    };

    await ScoreModel.destroy(query);
    res.status(200).json({ message: 'Score Entry removed' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
