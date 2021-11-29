const Event = require('../models/event')

// async function show(req, res) {
//     const event = await Event.findById(req.params.id);
//     res.status(200).json(event);
//   }

  async function index(req, res) {
    const events = await Event.find({});
    
    res.status(200).json(events);
  }


  module.exports = {
    index,  
    // show
  }