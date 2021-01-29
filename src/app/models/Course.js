const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Course = new Schema({
   
    title: { type: String , maxlength: 255},
    description: {type: String,minlength:18, maxlength : 600},
    image: {type:String, maxlength:255},
    createdAt: {type:Date, default:Date.now},
    updatedAt: {type:Date, default:Date.now},
  });

  module.exports=  mongoose.model('Course', Course);
  // Course map với collection courses ở mongodb => lấy được dữ liệu
