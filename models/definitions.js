const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const DefinitionSchema = new Schema({
  term: {
    type: String,
    required: true
  },
  items: [ItemSchema],
  category: {
    type: String,
    required: true,
    default: ""
  },
  importance_score: {
    type: Number,
    required: true,
    default: 0
  },
});

module.exports = mongoose.model('Definitions', DefinitionSchema);
