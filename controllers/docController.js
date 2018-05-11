

exports.homepage = (req, res) => {
  res.render('homepage')
}

exports.add = (req, res) => {
  res.render('add')
}

exports.addpost = (req, res) => {
  res.render('add', { this_is_post : true })
}
