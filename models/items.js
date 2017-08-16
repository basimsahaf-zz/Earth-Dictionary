const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

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
    }
},
{
  timestamps: true
});

module.exports = mongoose.model('Items', ItemSchema);

