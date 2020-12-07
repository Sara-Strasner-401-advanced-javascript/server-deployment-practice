function notFound(req, res){
  res.status(404).send('Sorry, that page cannot be found found');
}

module.exports = notFound;