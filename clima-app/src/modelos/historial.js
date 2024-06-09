const mongoose = require('mongoose');

const searchHistorySchema = new mongoose.Schema({
  city: String,
  date: { type: Date, default: Date.now }
});

const SearchHistory = mongoose.model('historials', searchHistorySchema);

module.exports = SearchHistory;