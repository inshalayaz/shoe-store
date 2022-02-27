import { Router } from 'express';
import User from '../models/Users.mjs';
import CryptoJS from 'crypto-js';

const router = Router();

const { AES } = CryptoJS;

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const emailExists = await User.findOne({ where: { email: email } });

  if (emailExists) {
    res.status(410).json({ message: 'Email already Registered' });
  } else {
    try {
      const user = await User.create({
        email: email,
        password: AES.encrypt(
          password,
          '1234' //Secret Key set visible intentionally this is not a mistake just a demo project
        ).toString(),
      });
      res.status(201).json({ message: 'Registered Successfully' });
    } catch (error) {
      res.status(500).json(error);
    }
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (!user) {
    res.status(400).json({ message: 'Incorrect Email or Password' });
  } else {
    const bytes = CryptoJS.AES.decrypt(user.password, '1234');
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    // console.log(password, originalText999);
    if (originalText !== password) {
      res.status(400).json({ message: 'Incorrect Email or Password' });
    } else {
      const { password, email, ...info } = user.dataValues;
      res.status(200).json({ email });
    }
  }
});

export default router;
