const mongoose = require('mongoose');
const mongooseAutoInc = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required: true,
    },
    url:{
        type:String,
        required:true,
    },
    trending:{
        type:Boolean,
        required:true,
        default:false,
    },

})

movieSchema.plugin(mongooseAutoInc.plugin,'movie');

module.exports = mongoose.model('movie',movieSchema);