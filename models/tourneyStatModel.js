const { DataTypes } = require('sequelize');
const db = require('../db');

const TourneyStat = db.define('tourneystat', {
  college: {
    type: DataTypes.STRING,
  },
  round: {
    type: DataTypes.STRING,
  },
  win: {
    type: DataTypes.INTEGER,
  },
  loss: {
    type: DataTypes.INTEGER,
  },
  pointsFor: {
    type: DataTypes.INTEGER,
  },
  pointsAgainst: {
    type: DataTypes.INTEGER,
  },
});

module.exports = TourneyStat;
