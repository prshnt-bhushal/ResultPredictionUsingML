import db from '../../../../utils/db';
import {
  deleteResults,
  getResults,
  postResults,
  putResults,
} from '../../../../controller/resultsController';

export default async function handler(req, res) {
  db.dbConnect();

  // type of request
  const { method, query } = req;
  const { sNum } = query;

  switch (method) {
    case 'GET':
      try {
        if (sNum) {
          // Call the controller function with sNum parameter
          await getResults(req, res, sNum);
        } else {
          // Handle case when sNum is not provided
          res.status(400).json({ success: false, message: 'sNum is required' });
        }
      } catch (error) {
        res
          .status(500)
          .json({ success: false, message: 'Internal server error' });
      }
      break;
    case 'POST':
      try {
        postResults(req, res);
        // res.status(201).json({ success: true, messsage:"Post" });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        putResults(req, res);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        deleteResults(req, res);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(400).end(`Method ${method} Not Allowed`);
      break;
  }
  db.dbDisconnect();
}
