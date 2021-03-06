const { DataTypes } = require('sequelize');
const db = require('../db');

const Score = db.define('score', {
  date: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  time: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  tvStation: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  region: {
    type: DataTypes.INTEGER,
    // allowNull: true,
  },
  round: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  site: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  team1: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  score1: {
    type: DataTypes.INTEGER,
    // allowNull: true,
  },
  team2: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  score2: {
    type: DataTypes.INTEGER,
    // allowNull: true,
  },
});

module.exports = Score;
