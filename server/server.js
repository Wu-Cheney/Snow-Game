const path = require('path');
const express = require('express');
const apiRouter = require('./routes/api');

const app = express();
const PORT = 3000;

//parse data
app.use(express.json());
app.use(express.urlencoded({ extened: true }));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

//route handlers
app.use('/api', apiRouter);

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express found error',
    status: 500,
    message: { err: 'theres an error!' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
