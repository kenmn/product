var mongoose = require('mongoose');
var belts = require('../controllers/belts.js');
mongoose.Promise = global.Promise;
var path = require('path');

var belt = mongoose.model('Belt');


module.exports = function(app) {
  // get all belts
  app.get('/belts/list', belts.index);

  // create a belt
  app.post('/belts/new', belts.create);

  // get one belt
  app.get('/belts/show/:id', belts.findOne);

  // update a belt
  app.put('/belts/edit/:id', belts.update);

  // delete a belt
  app.delete('/delete/:id', belts.removeBelt);

  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });


}