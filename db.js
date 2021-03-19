const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);
// const sequelize = new Sequelize({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// let Team = require('./models/teamModel');
// let Stats = require('./models/tourneyStatModel');

// Team.hasOne(Stats);
// Stats.belongTo(Team);

module.exports = sequelize;
