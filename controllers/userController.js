exports.index = async (req, res) => {
  res.render('index');
};
exports.about = async (req, res) => {
  res.render('about');
}
exports.contact = async (req, res) => {
  res.render('contact');
}