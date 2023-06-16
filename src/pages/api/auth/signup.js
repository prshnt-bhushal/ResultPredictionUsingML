import db from '../../../../utils/db';
import User from '../../../../models/User';
import bcryptjs from 'bcryptjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const { sNum, name, email, password } = req.body;
  if (
    !sNum ||
    !name ||
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: 'Invalid Input' });
    return;
  }

  await db.dbConnect();
  // existing user
  const existingUserEmail = await User.findOne({ email: email });
  if (existingUserEmail) {
    res.status(422).json({ message: 'email already exists' });
    db.dbDisconnect();
    return;
  }
  const existingSymbolNum = await User.findOne({ sNum: sNum });
  if (existingSymbolNum) {
    res.status(422).json({ message: 'Symbol Number already exists' });
    db.dbDisconnect();
    return;
  }
  const newUser = new User({
    sNum: sNum,
    name: name,
    email: email,
    password: bcryptjs.hashSync(password),
    isAdmin: false,
  });

  const user = await newUser.save();
  await db.dbDisconnect();
  res.status(201).json({ message: 'User created', user: user });
}

export default handler;
