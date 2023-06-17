// Import necessary modules and models
import Results from '../../../models/Results';

const ResultsData = async (req, res, next) => {
  let results;
  try {
    const userId = req.user.sNum; // Assuming user ID is stored in req.user.id
    results = await Results.find({ userId });
  } catch (err) {
    // Handle the error
  }
  res.json({
    results: results.map((result) => result.toObject({ getters: true })),
  });
};

export default ResultsData;



// ***************** API TEST *********************

// const Result = require('../../../models/Results');

//ResultPost API

// const resultPost = async (req, res, next) => {
//   const { sNum,semester, subjects } = req.body;

//   const createdResult = new Result.secondSemesterResultModel({
//     sNum,
//     semester,
//     subjects,
//   });

//   try {
//     await createdResult.save();
//   } catch (err) {
//     const error = new HttpError(
//       'Creating Result failed, please try again.',
//       500
//     );
//     return next(error);
//   }
// };

// ResultGet API

// const resultGet = async (req, res, next) => {
//   let results;
//   try {
//     results = await Result.find({});
//   } catch (err) {
//     const error = new HttpError(
//       'Fetching results failed, please try again later.',
//       500
//     );
//     return next(error);
//   }
//   res.json({
//     results: results.map((result) => result.toObject({ getters: true })),
//   });
// };

// exports.resultPost = resultPost;
// exports.resultGet = resultGet;
