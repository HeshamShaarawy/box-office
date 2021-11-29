const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
      name: String,
      date : String,
      seats: [String],
      price: Number
      },
    {
      timestamps: true,
    }
  );
  



module.exports = mongoose.model("Event", eventSchema);