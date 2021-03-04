const { DataTypes } = require('sequelize');
const db = require('../db');

const Team = db.define('team', {
  college: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nickname: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  conference: {
    type: DataTypes.STRING,
  },
  colors: {
    type: DataTypes.STRING,
  },
  headCoach: {
    type: DataTypes.STRING,
  },
  overallWins: {
    type: DataTypes.INTEGER,
  },
  overallLoss: {
    type: DataTypes.INTEGER,
  },
  confWins: {
    type: DataTypes.INTEGER,
  },
  confLoss: {
    type: DataTypes.INTEGER,
  },
  bid: {
    type: DataTypes.STRING,
  },
  totalApp: {
    type: DataTypes.INTEGER,
  },
  lastApp: {
    type: DataTypes.TEXT,
  },
  ncaaWin: {
    type: DataTypes.INTEGER,
  },
  ncaaLoss: {
    type: DataTypes.INTEGER,
  },
  bestFinish: {
    type: DataTypes.TEXT,
  },
  region: {
    type: DataTypes.STRING,
  },
  seed: {
    type: DataTypes.INTEGER,
  },
  seedWin: {
    type: DataTypes.INTEGER,
  },
  seedLoss: {
    type: DataTypes.INTEGER,
  },
  websiteLink: {
    type: DataTypes.STRING,
  },
  scheduleLink: {
    type: DataTypes.STRING,
  },
  rosterLink: {
    type: DataTypes.STRING,
  },
  statLink: {
    type: DataTypes.STRING,
  },
  color1: {
    type: DataTypes.STRING,
  },
  color2: {
    type: DataTypes.STRING,
  },
  logoLink: {
    type: DataTypes.STRING,
  },
});

module.exports = Team;
