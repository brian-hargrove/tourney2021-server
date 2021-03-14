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
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  conference: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  colors: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  headCoach: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  overallWins: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  overallLoss: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  confWins: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  confLoss: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  bid: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalApp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastApp: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ncaaWin: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ncaaLoss: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  bestFinish: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  region: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  seed: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  seedWin: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  seedLoss: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  websiteLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  scheduleLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rosterLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  statLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  color1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  color2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  logoLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Team;
