import db from "../../../utils/db";
import Results from "../../../models/Results";


const ResultsData = async ( res, next) =>
{
    let results;
    try {
      results = await Results.find({});
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
};

exports.ResultsData = ResultsData;







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
