let Express = require('express');
let router = Express.Router();
// let validateJWT = require('../middleware/validate-jwt');
const { ScoreModel } = require('../models');

//! SCORE CREATE
router.post('/create', async (req, res) => {
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
  // const { id } = req.user;
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
router.put('/update/:id', function (req, res) {
  let data = req.params.id;
  let date = req.body.date;
  let time = req.body.time;
  let tvStation = req.body.tvStation;
  let region = req.body.region;
  let round = req.body.round;
  let site = req.body.site;
  let team1 = req.body.team1;
  let score1 = req.body.score1;
  let team2 = req.body.team2;
  let score2 = req.body.score2;

  ScoreModel.update(
    {
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
    },
    { where: { id: data } }
  ).then(
    function updateSuccess(data) {
      res.json({
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
      });
    },
    function updateError(err) {
      res.send(500, err.message);
    }
  );
});
// router.put('/update/:scoreId', async (req, res) => {
//   const {
//     date,
//     time,
//     tvStation,
//     region,
//     round,
//     site,
//     team1,
//     score1,
//     team2,
//     score2,
//   } = req.body.score;
//   const scoreId = req.params.scoreId;
//   // const userId = req.user.id;

//   const query = {
//     where: {
//       id: scoreId,
//       // owner: userId,
//     },
//   };

//   const updatedScore = {
//     date: date,
//     time: time,
//     tvStation: tvStation,
//     region: region,
//     round: round,
//     site: site,
//     team1: team1,
//     score1: score1,
//     team2: team2,
//     score2: score2,
//   };

//   try {
//     const update = await ScoreModel.update(updatedScore, query);
//     res.status(200).json(update);
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// });

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
