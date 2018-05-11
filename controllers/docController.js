

exports.homepage = (req, res) => {
  console.log('Cookies HOME🍪 ', req.cookies)
  res.render('homepage')
}

exports.add = (req, res) => {
  res.render('add')
}

exports.addpost = (req, res) => {
  res.render('add', { this_is_post : true })
}
