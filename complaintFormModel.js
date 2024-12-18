const mongoose = require('mongoose');

const complaintFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pnr: {
    type: String,
    required: true
  },
  incidentDate: {
    type: Date,
    required: true
  },
  complaint: {
    type: String,
    required: true
  }
});

const Complaint = mongoose.model('Complaint', complaintFormSchema);

module.exports = Complaint;