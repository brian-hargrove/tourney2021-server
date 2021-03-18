let Express = require('express');
let router = Express.Router();
// const validateJWT = require('../middleware/validate-jwt');
const { TeamModel } = require('../models');

//! TEAM CREATE
router.post('/create', async (req, res) => {
  const {
    college,
    nickname,
    city,
    state,
    conference,
    colors,
    headCoach,
    overallWins,
    overallLoss,
    confWins,
    confLoss,
    bid,
    totalApp,
    lastApp,
    ncaaWin,
    ncaaLoss,
    bestFinish,
    region,
    seed,
    seedWin,
    seedLoss,
    websiteLink,
    scheduleLink,
    rosterLink,
    statLink,
    color1,
    color2,
    logoLink,
  } = req.body.team;

  const teamEntry = {
    college: college,
    nickname: nickname,
    city: city,
    state: state,
    conference: conference,
    colors: colors,
    headCoach: headCoach,
    overallWins: overallWins,
    overallLoss: overallLoss,
    confWins: confWins,
    confLoss: confLoss,
    bid: bid,
    totalApp: totalApp,
    lastApp: lastApp,
    ncaaWin: ncaaWin,
    ncaaLoss: ncaaLoss,
    bestFinish: bestFinish,
    region: region,
    seed: seed,
    seedWin: seedWin,
    seedLoss: seedLoss,
    websiteLink: websiteLink,
    scheduleLink: scheduleLink,
    rosterLink: rosterLink,
    statLink: statLink,
    color1: color1,
    color2: color2,
    logoLink: logoLink,
  };
  console.log(teamEntry);
  try {
    const newTeam = await TeamModel.create(teamEntry);
    res.status(200).json(newTeam);
  } catch (err) {
    res.status(500).json({ error: err });
    console.error(err);
  }
});

//! GET TEAM
router.get('/', async (req, res) => {
  try {
    const teams = await TeamModel.findAll();
    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//! GET INFO BY TEAM
router.get('/school/:college', async (req, res) => {
  const { college } = req.params;
  try {
    const results = await TeamModel.findAll({
      where: { college: college },
    });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//! UPDATE TEAM INFO
router.put('/update/:id', function (req, res) {
  let data = req.params.id;
  let college = req.body.college;

  let nickname = req.body.nickname;
  let city = req.body.city;
  let state = req.body.state;
  let conference = req.body.conference;
  let colors = req.body.colors;
  let headCoach = req.body.headCoach;
  let overallWins = req.body.overallWins;
  let overallLoss = req.body.overallLoss;
  let confWins = req.body.confWins;
  let confLoss = req.body.confLoss;
  let bid = req.body.bid;
  let totalApp = req.body.totalApp;
  let lastApp = req.body.lastApp;
  let ncaaWin = req.body.ncaaWin;
  let ncaaLoss = req.body.ncaaLoss;
  let bestFinish = req.body.bestFinish;
  let region = req.body.region;
  let seed = req.body.seed;
  let seedWin = req.body.seedWin;
  let seedLoss = req.body.seedLoss;
  let websiteLink = req.body.websiteLink;
  let scheduleLink = req.body.scheduleLink;
  let rosterLink = req.body.rosterLink;
  let statLink = req.body.statLink;
  let color1 = req.body.color1;
  let color2 = req.body.color2;
  let logoLink = req.body.logoLink;

  TeamModel.update(
    {
      college: college,
      nickname: nickname,
      city: city,
      state: state,
      conference: conference,
      colors: colors,
      headCoach: headCoach,
      overallWins: overallWins,
      overallLoss: overallLoss,
      confWins: confWins,
      confLoss: confLoss,
      bid: bid,
      totalApp: totalApp,
      lastApp: lastApp,
      ncaaWin: ncaaWin,
      ncaaLoss: ncaaLoss,
      bestFinish: bestFinish,
      region: region,
      seed: seed,
      seedWin: seedWin,
      seedLoss: seedLoss,
      websiteLink: websiteLink,
      scheduleLink: scheduleLink,
      rosterLink: rosterLink,
      statLink: statLink,
      color1: color1,
      color2: color2,
      logoLink: logoLink,
    },
    { where: { id: data } }
  ).then(
    function updateSuccess(data) {
      res.json({
        college: college,
        nickname: nickname,
        city: city,
        state: state,
        conference: conference,
        colors: colors,
        headCoach: headCoach,
        overallWins: overallWins,
        overallLoss: overallLoss,
        confWins: confWins,
        confLoss: confLoss,
        bid: bid,
        totalApp: totalApp,
        lastApp: lastApp,
        ncaaWin: ncaaWin,
        ncaaLoss: ncaaLoss,
        bestFinish: bestFinish,
        region: region,
        seed: seed,
        seedWin: seedWin,
        seedLoss: seedLoss,
        websiteLink: websiteLink,
        scheduleLink: scheduleLink,
        rosterLink: rosterLink,
        statLink: statLink,
        color1: color1,
        color2: color2,
        logoLink: logoLink,
      });
    },
    function updateError(err) {
      res.send(500, err.message);
    }
  );
});

//! DELETE TEAM
router.delete('/delete/:teamId', async (req, res) => {
  const teamId = req.params.teamId;

  try {
    const query = {
      where: {
        id: teamId,
      },
    };
    await TeamModel.destroy(query);
    res.status(200).json({ message: 'Team removed' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
module.exports = router;
