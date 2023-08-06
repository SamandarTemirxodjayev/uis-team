const Emails = require('../models/Email.js');
const axios = require('axios');

exports.index = async (req, res) => {
  res.render('index');
};
exports.AddEmail = async (req, res) => {
  if(!req.body.email){
    res.render('404');
  }
  const newEmail = new Emails({
    email: req.body.email
  });
  await newEmail.save();
  res.render('index');
}
exports.about = async (req, res) => {
  res.render('about');
}
exports.contact = async (req, res) => {
  res.render('contact');
}
exports.contactPost = async (req, res) => {
  const { name, phone, subject, text } = req.body;

  const botToken = '5853972317:AAE5qwX4lzpcJ4jHLzsVi8DVM4niXz5Ta8s';
  const chatId = '-952907854';

  const message = `Name: ${name}\nPhone: ${phone}\nSubject: ${subject}\nText: ${text}`;

  try {
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
    });

    res.render('alert');
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message to Telegram.');
  }
};