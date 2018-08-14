var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TextSchema = new Schema({
    str: String
});

module.exports = mongoose.model('Text', TextSchema);