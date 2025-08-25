const userSchema = new mongoose.Schema({
  username: String,
  score: Number,
  completedQuests: [Number]
});
module.exports = mongoose.model('User', userSchema);
