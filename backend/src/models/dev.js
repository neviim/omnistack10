const mongoose = require('mongoose');

// define o esquela da estrutura no banco.
const DevSchema = new mongoose.Schema({
	name: String,
	github_username: String,
	bio: String,
	avatar_url: String,
	techs: [String],
});

// Exporta o modulo DevSchema.
module.exports = mongoose.model('Dev', DevSchema);