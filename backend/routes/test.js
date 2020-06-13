const router = require('express').Router();
let Test = require('../models/test.model');

router.route('/').get((req, res) => {
  Test.find()
    .then(tests => res.json(tests))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const newTest = new Test({
    title,
    description
  });

  newTest.save()
  .then(() => res.json('Test added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Test.findByIdAndRemove(req.params.id)
    .exec()
    .then(tests => res.json(tests))
    .catch(err => res.status(404).json('Error: ' + err));
});

module.exports = router;
