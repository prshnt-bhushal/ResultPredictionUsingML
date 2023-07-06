// controller
import Results from "../models/Results";

// get :http://localhost:3000/api/results
export async function getResults(req, res, sNum) {
  let results;
  try {
    results = await Results.find({ sNum: sNum }); // Fetch results with matching sNum
  } catch (err) {
    const error = new HttpError(
      'Fetching results failed, please try again later.',
      500
    );
    return next(error);
  }

  res.json({
    results: results.map((result) => result.toObject({ getters: true })),
  });
}


// get :http://localhost:3000/api/tables/1
// export async function getTableItem(req, res) {
//   try {
//     const { id } = req.query;
//     console.log(id);
//     const item = await Results.findOne({ item: { $in: [id] } });
//     if (!item) {
//       return res.status(404).json({ error: 'No Item Found' });
//     }
//     return res.status(200).json({ item });
//   } catch (error) {
//     return res.status(404).json({ error: 'Error While Fetching Data' });
//   }
// }

// post :http://localhost:3000/api/tables
export async function postResults(req, res) {
 const { sNum,semester, subjects } = req.body;

 const createdResult = new Results({
   sNum,
   semester,
   subjects,
 });

 try {
   await createdResult.save();
 } catch (err) {
   const error = new HttpError(
     'Creating Result failed, please try again.',
     500
   );
   return next(error);
 }
}

// put :http://localhost:3000/api/tables/1
export async function putResults(req, res) {
  try {
    const { id } = req.query;
    const { name, updatedBy } = req.body;
    if (!name)
      return res.status(404).json({ error: 'Form Data Not provided ...!' });
    const updatedItem = await Results.findByIdAndUpdate(
      id,
      {
        name: name,
        updatedBy: updatedBy,
        updatedOn: Date.now(),
      },
      { new: true }
    );
    res.status(201).json({ message: 'Item Updated', item: updatedItem });
  } catch (error) {
    res.status(404).json({ error: 'Error While Updating Data' });
  }
}

// delete :http://localhost:3000/api/tables/1
export async function deleteResults(req, res) {
  try {
    const { id } = req.query;
    const deletedItem = await Results.findByIdAndDelete(id);
    res.status(201).json({ message: 'Item Deleted', item: deletedItem });
  } catch (error) {
    res.status(404).json({ error: 'Error While Deleting Data' });
  }
}
