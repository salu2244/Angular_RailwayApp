const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var contactSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        address :{
            type : String,
            required : true
        },
        phone :{
            type : Number,
            required : true
        }
    }
)

module.exports = mongoose.model('contact',contactSchema);