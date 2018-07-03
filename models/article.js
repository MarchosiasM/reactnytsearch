import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
  _id: String,
  headline: String,
  weburl: String,
  snippet: String,
  byline: String,
  img: String,
});

const Article = mongoose.model('Article', articleSchema);

export default Article;
