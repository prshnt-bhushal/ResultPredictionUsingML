import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getPredictions } from '../lib/helper';

export default function ResultPredict({ subjectData }) {
  const [predictedGrades, setPredictedGrades] = useState([]);
  const pastSubjects = subjectData.map((subject) => subject.subject);
  const pastGrades = subjectData.map((subject) => subject.grade);
  console.log(pastGrades);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:5000/api/predict', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           previousScores: [
  //             3.3, 2.7, 3.7, 2.3, 3.7, 4, 2, 1.7, 4, 0, 4, 0, 3.7, 2.3, 2, 0, 2,
  //             0, 3, 3.7, 3.3, 2.7, 3, 4, 3.7, 2.7, 4, 2.7, 3, 3.3,
  //           ],
  //         }),
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setPredictedGrades(data.predictedGrades[0]);
  //       } else {
  //         console.error('Error:', response.status);
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
const handlePredict = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            previousScores:pastGrades
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setPredictedGrades(data.predictedGrades[0]);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
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

      {predictedGrades.length > 0 && (
        // <table className="mt-4">
        //   <thead>
        //     <tr>
        //       <th>Subject</th>
        //       <th>Predicted Grade</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {subjectData.map((subject, index) => (
        //       <tr key={index}>
        //         <td>{subject}</td>
        //         <td>{predictedGrades[index]}</td>
        //       </tr>
        //     ))}
        //   </tbody>
        // </table>
        <div>
          {predictedGrades.map((grade, index) => (
            <p key={index}>{grade}</p>
          ))}
        </div>
      )}
    </div>
  );
}
