const router = require('express').Router();
let Person = require('../../models/person');

router.route('/').get((req, res) => {
  Person.find()
    .then(persons => res.json(persons))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const personname = req.body.personname;

  const newPerson = new Person({personname});

  newPerson.save()
    .then(() => res.json('Person added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;