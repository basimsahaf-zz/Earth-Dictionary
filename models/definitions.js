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

const ItemSchema = new Schema({
    definition: {
      type: String,
      required: true,
      default: ""
    },
    references: {
      type: String,
      required: false,
      default: ""
    }
    upvotes: {
      type: Number,
      required: true,
      default: 0
    },
    downvotes: {
      type: Number,
      required: true,
      default: 0
    },
    score: {
      type: Number,
      required: true,
      default: 0
    },
    userid_created: {
      type: String,
      required: true,
      default: ""
    },
    user_email_created: {
      type: String,
      required: true,
      default: ""
    },
    time_created: {
      type: Date,
      required: true,
      default:Date.now}
});

module.exports = mongoose.model('Definitions', DefinitionSchema);
