require('dotenv').config();
const Express = require('express');
const bodyParser = require('body-parser');
const app = Express();
const dbConnection = require('./db');
const controllers = require('./controllers/indexController');

app.use(Express.json());
// app.use(bodyParser.json());
app.use(require('./middleware/headers'));

app.use('/user', controllers.userController);
app.use('/score', controllers.scoreController);
app.use('/tourneystat', controllers.tourneyStatsController);
app.use('/team', controllers.teamController);

// app.use(require('./middleware/validate-jwt'));

dbConnection
  .authenticate()
  .then(() => dbConnection.sync())
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.log(`[Server]: Server crashed. Error = ${err}`);
  });
