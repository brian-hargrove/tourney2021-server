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

//! UPDATE TEAM INFO
router.put('/update/:teamId', async (req, res) => {
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
  const teamId = req.params.teamId;

  const query = {
    where: { id: teamId },
  };

  const updatedTeam = {
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
  try {
    const update = await TeamModel.update(updatedTeam, query);
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json({ error: err });
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
