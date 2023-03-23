const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;


const Course = new Schema({
  name: { type: String, default: 'none', maxLength: 255},
  description: { type: String, maxLength: 600},
  img: { type: String, maxLength: 255},
  videoId: {type: String},
  slug: { type: String, slug: 'name'},
  // deleted: {type: Boolean, default: false}
}, {
  timestamps : true
});

//Add plugin 
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});



module.exports = mongoose.model('Course', Course);