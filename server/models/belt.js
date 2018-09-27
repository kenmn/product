var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/beltAPI');
var Schema = mongoose.Schema;

var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection('mongodb://localhost/beltAPI');

autoIncrement.initialize(connection);

// define the model structure, CHANGE THIS PER PROJECT

var BeltSchema = new mongoose.Schema({
    _id: {type: Number},
    name: {type: String, required: [true, "A name must be provided"], minlength: [3, "Name must contain at least 3 characters"]},
    quantity: {type: Number, required: [true, "A quantity must be provided"], min: [0, "Quantity cannnot be less than zero"] },
    price: {type: Number, required: [true, "A price must be provided"], min: [0, "Price cannot be less than zero"] }
  }, {timestamps: true})

mongoose.model('Belt', BeltSchema);
// // set this model in the mongoose library, CHANGE THIS PER PROJECT
BeltSchema.plugin(autoIncrement.plugin, {
  model: 'Belt',
  field: '_id',
  startAt: 1,
  incrementBy: 1
});

