module.exports = (app, express) => {
  app.get('/', (req, res) => {
    res.send('/index.html');
  });
}
