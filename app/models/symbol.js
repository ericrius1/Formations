var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , Schema = mongoose.Schema;
 
var SymbolSchema = new Schema({
  svgxml: {type: String}
});
 

SymbolSchema.statics = {
  load: function (id, cb) {
    this.findOne({ _id : id }).exec(cb);
  }
};
 
mongoose.model('Symbol', SymbolSchema);
