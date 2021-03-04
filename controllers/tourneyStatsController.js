const { query } = require('express');
let Express = require('express');
let router = Express.Router();
let validateJWT = require('../middleware/validate-jwt');
const { TourneyStatModel } = require('../models');

//! STATS CREATE
router.post('/create', validateJWT, async (req, res) => {
  const {
    college,
    round,
    win,
    loss,
    pointsFor,
    pointsAgainst,
  } = req.body.tourneystat;
  const { id } = req.user;
  const tourneyEntry = {
    college,
    round,
    win,
    loss,
    pointsFor,
    pointsAgainst,
    owner: id,
  };

  try {
    const newStat = await TourneyStatModel.create(tourneyEntry);
    res.status(200).json(newStat);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
  //   TourneyStatModel.create(tourneyEntry);
});

//! GET STATS BY COLLEGE
router.get('/:college', async (req, res) => {
  const { college } = req.params;

  try {
    const results = await TourneyStatModel.findAll({
      where: { college: college },
    });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//! UPDATE STATS BY COLLEGE
router.put('/update/:college/:tourneystatId', async (req, res) => {
  const { win, loss, pointsFor, pointsAgainst } = req.body.tourneystat;
  const tourneystatId = req.params.tourneystatId;

  const query = {
    where: { id: tourneystatId },
  };

  const updatedStat = {
    win: win,
    loss: loss,
    pointsFor: pointsFor,
    pointsAgainst: pointsAgainst,
  };
  try {
    const update = await TourneyStatModel.update(updatedStat, query);
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
