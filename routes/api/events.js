const express = require("express");
const router = express.Router();
const eventsCtrl = require("../../controllers/events");

// public
// router.get("/",eventsCtrl.show);
router.get("/", eventsCtrl.index);

// protected
router.use(require('../../config/auth'));




function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }


module.exports = router;