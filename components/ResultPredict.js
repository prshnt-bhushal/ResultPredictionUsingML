import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getPredictions } from '../lib/helper';

export default function ResultPredict({ subjectData }) {
  const [predictedGrades, setPredictedGrades] = useState([]);
  const pastGrades = subjectData.map((subject) => subject.grade);
  const [isFetching, setIsFetching] = useState(false);
  const handlePredict = async () => {
    try {
      toast.success("Predicting")
      setIsFetching(true);
      const response = await fetch('http://127.0.0.1:5000/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          previousScores: pastGrades,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setPredictedGrades(data.subjects);
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsFetching(false);
    }
  };
    const handleReset = () => {
      setPredictedGrades([]);
      setIsFetching(false);
    };

  // Function to check the current semester based on the number of entries in pastGrades
  const getCurrentSemester = () => {
    const semesterCount = pastGrades.length;
    const remainingSemesters = 8 - Math.ceil(semesterCount / 6);
    return remainingSemesters;
  };

  return (
    <div className="p-2">
      {predictedGrades.length === 0 && !isFetching && (
        <>
          <h2 className="py-2 font-medium text-lg">
            Predict Your Next Result:
          </h2>
          <button
            data-text="Awesome"
            className="button"
            onClick={handlePredict}
          >
            <span className="actual-text">&nbsp;Predict&nbsp;</span>
            <span className="hover-text" aria-hidden="true">
              &nbsp;Predict&nbsp;
            </span>
          </button>
        </>
      )}

      {predictedGrades.length > 0 && (
        <>
          <h2 className="py-2 font-medium text-xl text-center text-red-600">
            Warning!!!
          </h2>
          <h2 className="py-2 font-medium text-lg text-center text-red-600">
            Please note that the predictions provided are for reference only and
            should not be solely relied upon for accurate results
          </h2>
          <div className='flex justify-between'>
            <h3 className="py-2 font-medium text-lg text-center">
              Remaining Semesters: {getCurrentSemester()}
            </h3>
            <button className="button mt-2" onClick={handleReset}>
              <span className="actual-text">&nbsp;Exit&nbsp;</span>
              <span className="hover-text" aria-hidden="true">
                &nbsp;Exit&nbsp;
              </span>
            </button>
          </div>
          <div className="min-w-max w-full table-auto border grid gap-4 mt-2 md:grid-cols-2">
            {Array.from({ length: Math.ceil(predictedGrades.length / 6) }).map(
              (_, index) => (
                <table
                  className="min-w-max w-full table-auto border"
                  key={index}
                >
                  <thead>
                    <tr className="bg-[#337476] text-white uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left border-l-2">
                        Subject
                      </th>
                      <th className="py-3 px-6 text-left border-l-2">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="cursor-pointer text-sm font-light">
                    {predictedGrades
                      .slice(index * 6, (index + 1) * 6)
                      .map((subject, i) => (
                        <tr
                          key={i}
                          className={`${
                            i % 2 === 0 ? 'bg-[#7fb8ba]' : 'bg-[#6ba1a3]'
                          } hover:bg-[#88b6b8]`}
                        >
                          <td className="py-3 px-6 text-left font-semibold whitespace-nowrap border-l-2">
                            {subject.name}
                          </td>
                          <td className="py-3 px-6 text-left text-white font-bold whitespace-nowrap border-l-2">
                            {subject.grade}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}
