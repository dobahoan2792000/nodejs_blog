module.exports = {
  multipleMongooseToObject: function (mongooses) {
      return mongooses.map(mongoose => mongoose.toObject())
  },
  mongooseToObject: function (mongoose){
      return mongoose ? mongoose.toObject() : mongoose
  }
};
// Khi dung handler khi lay array object tu db => k the lay truc tiep duoc vi 
// handlerBar k cho phep lay truc tiep tu obj cua mongodb nen ta phai 
// chuyen array obj mongo ve dang object thuong
