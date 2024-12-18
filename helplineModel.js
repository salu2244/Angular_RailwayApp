const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var helplineSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        message :{
            type : String,
            required : true
        },
        phone :{
            type : Number,
            required : true
        }
    }
)

module.exports = mongoose.model('helpline',helplineSchema);


