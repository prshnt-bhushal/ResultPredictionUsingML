import Results from '../../../models/Results';
import data from '../../../utils/data';
import db from '../../../utils/db';

const handler = async (req, res) => {
  await db.dbConnect();
  await Results.deleteMany();
  await Results.insertMany(data.results);
  await db.dbDisconnect();
  res.send({ message: 'Seeded successfully' });
  res.status(200).json({ message: 'Disconnected' });
};

export default handler;
