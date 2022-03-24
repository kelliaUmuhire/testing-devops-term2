const mongoose = require("mongoose");

const Token = mongoose.model(
  "tokens",

  new mongoose.Schema({
    token_id: {
      type: Number,
      required: true,
    },
    meter_num: {
      type: Number,
      required: true,
    },
    status: String,
    created_at: String,
  })
);

module.exports = Token;
