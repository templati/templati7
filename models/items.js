//Module dependencies
var mongoose = require('mongoose');

//Schema
var ItemSchema = new mongoose.Schema({
	name: { type:String, required:true },
	slug: { type:String, required:true }
});

//Return model
module.exports = mongoose.model('Items', ItemSchema);