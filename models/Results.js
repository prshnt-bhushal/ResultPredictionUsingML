//Results

import mongoose from 'mongoose';

const resultsSchema = new mongoose.Schema({
  sNum: Number,
  semester: String,
  subjects: [
    {
      _id: false,
      name: String,
      grade: String,
    },
  ],
});

const Results = mongoose.models.Results || mongoose.model('Results', resultsSchema);
export default Results;
