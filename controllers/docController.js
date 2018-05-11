const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

exports.homepage = async (req, res) => {
  const animals = await Animal.find()
  res.render('homepage', {animals})
}


// ADD-CREATE-GET
exports.add = (req, res) => {
  res.render('add')
}

exports.addpost = async (req, res) => {
  const animal = await (new Animal(req.body)).save();
  // req.flash('success', `${review.podTitle} created`);
  animalName = animal.name
  console.log(animalName);
  res.redirect('/');
}
