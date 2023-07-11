import React from 'react';
import { toast } from 'react-toastify';

export default function ResultPredict(subjectData) {
  const handlePredict = () => {
    toast.success('Predicting...');
    console.log(subjectData);
  };
  
  return (
    <div className="p-2">
      <h2 className="py-2 font-medium text-lg">Predict Your Next Result:</h2>
      <button data-text="Awesome" className="button" onClick={handlePredict}>
        <span className="actual-text">&nbsp;Predict&nbsp;</span>
        <span className="hover-text" aria-hidden="true">
          &nbsp;Predict&nbsp;
        </span>
      </button>
    </div>
  );
}
