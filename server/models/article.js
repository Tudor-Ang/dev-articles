const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Object,
    required: true,
  },
  creator: {
    type: Object,
    required: true,
  },

}, {
  timestamps: true
});

export const ArticleModel = mongoose.models.Article || mongoose.model('Article', articleSchema);
