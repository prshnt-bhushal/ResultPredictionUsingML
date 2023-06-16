//steps to data base connection
// 1. npm init -y
// 2. npm install express mongodb mongoose cors bcryptjs axios dotenv
// 3. npm install nodemon
// 4. npm install dotenv 
// 7. npm install jsonwebtoken
// 9. npm install cookie-parser
// 10. npm install express-validator
// 11. npm install multer
// 12. npm install cloudinary

import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    console.log('Already connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('Using previous connection');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGO_URI);
  console.log('New connection');
  connection.isConnected = db.connections[0].readyState;
}

async function dbDisconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('Not disconnected');
    }
  }
}

const db = { dbConnect, dbDisconnect };
export default db;
