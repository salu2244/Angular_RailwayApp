const express = require("express");
const router = express.Router();
const helplineModel = require('../src/helpline/helplineModel');
const complaintFormModel = require('../src/complaintFormModel/complaintFormModel');
const Complaint = require('../src/complaintFormModel/complaintFormModel');
const Booking = require('../src/bookingFormModel/bookingFormModel');


// Insert data into database
router.post('/helpline/create', async (req, res) => {
    try {
        // Create a new instance of helplineModel with the request body//
        const helpline = new helplineModel(req.body);
        
        // Save the helpline data to the database
        await helpline.save();

        // Send a successful response with the saved data
        res.status(201).json({ 
            status: true,
            message: "Helpline connected successfully",
            data: helpline // Optionally, you can send back the saved data
        });
    } catch (error) {
        // Handle errors by sending an error response
        res.status(400).json({ 
            status: false,
            message: "Failed to connect helpline",
            error: error.message // Send back the error message
        });
    }
});



// Read data from the database
router.get('/helplineDetails', async (req, res) => {
    try {
        // Fetch all helpline details from the database
        const helplines = await helplineModel.find({});
        
        // Send the fetched helplines as a response
        res.status(200).json(helplines);
    } catch (error) {
        // Handle errors by sending an error response
        res.status(500).json({ 
            status: false,
            message: "Failed to retrieve helpline details",
            error: error.message // Send back the error message
        });
    }
});

// Insert data into ComplaintForm database



router.post('/complaintForm/create', async (req, res) => {
    try {
        const complaintForm = new Complaint(req.body);
        await complaintForm.save();
        const complaintNumber = complaintForm._id;
        res.status(201).json({ 
            success: true,
            message: "ComplaintForm connected successfully",
            data: complaintForm,
            complaintNumber: complaintNumber
        });
    } catch (error) {
        res.status(400).json({ 
            success: false,
            message: "Failed to connect ComplaintForm",
            error: error.message
        });
    }
});



router.get('/complaintForm/:id', async (req, res) => {
    try {
        const complaintId = req.params.id;
        const complaint = await Complaint.findById(complaintId);
        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found"
            });
        }
        res.status(200).json({ 
            success: true,
            message: "Complaint found successfully",
            data: complaint
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: "Failed to retrieve complaint",
            error: error.message
        });
    }
});




// Insert data into BookingFormModel database

router.post('/api/book', async (req, res) => {
    try {
      const booking = new Booking(req.body);
      const savedBooking = await booking.save();
      res.status(201).json({ message: 'Booking successful', data: savedBooking });
    } catch (err) {
      console.error('Error booking ticket:', err.message);
      res.status(500).json({ message: 'Error booking ticket', error: err.message });
    }
  });
  // Route to fetch all bookings (optional)
  router.get('/bookings', async (req, res) => {
    try {
      const bookings = await Booking.find();
      res.status(200).json(bookings);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching bookings', error: err.message });
    }
  });
  


module.exports = router;














