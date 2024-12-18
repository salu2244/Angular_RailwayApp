const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  journeyDate: { type: Date, required: true },
  travelClass: { type: String, required: true },
  berthPreference: { type: String, required: false },
  isPwd: { type: Boolean, required: false },
  hasConcession: { type: Boolean, required: false },
  isFlexible: { type: Boolean, required: false },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
