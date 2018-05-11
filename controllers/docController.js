const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

exports.homepage = (req, res) => {
  console.log('Cookies HOME🍪 ', req.cookies)
  res.render('homepage')
}


// ADD-CREATE-GET
exports.add = (req, res) => {
  res.render('add')
}
// ADD-CREATE-POST
// //just to check what is getting sent in the POST
exports.addpost = (req, res) => {res.json(req.body);};
// exports.addpost = (req, res) => {
//   res.render('add', { this_is_post : true })
// }


// ADD-CREATE-GET
exports.addReview = (req, res) => {
  res.render('editReview', { title: 'Add Review' });
};


// ADD-CREATE-POST
// //just to check what is getting sent in the POST
// exports.createReview = (req, res) => {res.json(req.body);};
// exports.createReview = async (req, res) => {
//   const review = await (new Review(req.body)).save();
//   req.flash('success', `${review.podTitle} created`);
//   res.redirect(`/review/${review.slug}`);
// };
