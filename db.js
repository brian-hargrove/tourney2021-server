const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

// let Team = require('./models/teamModel');
// let Stats = require('./models/tourneyStatModel');

// Team.hasOne(Stats);
// Stats.belongTo(Team);

module.exports = sequelize;
