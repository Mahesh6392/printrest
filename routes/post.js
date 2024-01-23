const mongoose = require("mongoose");
// const plm = require('passport-local-mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/pintrest");

const postSchema = mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  },
  title:String,
  description:String, 
  image:String


});

// userSchema.plugin(plm)

module.exports = mongoose.model("post",postSchema)