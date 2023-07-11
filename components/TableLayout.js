import { useQuery } from 'react-query';
import { getResults } from '../lib/helper';
import ResultAnalysisLayout from './ResultAnalysisLayout';
import ResultPredict from './ResultPredict';

export default function TableLayout({ symbolNumber }) {
  const {
    isLoading,
    error,
    data = {},
  } = useQuery('results', () => getResults(symbolNumber)
  // , {
  //   onSuccess: (data) => {
  //     console.log('success');
  //   },
  // }
  );
  const results = data.results || [];
  const subjectData = [];

  if (isLoading) return <div>Data Loading...</div>;
  if (error) return <div>{error.message}</div>;

  // Count the grades
  const gradeCount = {
    A: 0,
    'A-': 0,
    'B+': 0,
    B: 0,
    'B-': 0,
    'C+': 0,
    C: 0,
    'C-': 0,
    'D+': 0,
    D: 0,
    F: 0,
    Abs: 0,
    Expelled: 0,
    CNR: 0,
  };
  let totalGrades = 0;
  results.forEach((result) => {
    result.subjects.forEach((subject) => {
      const { grade } = subject;
      if (grade !== null && gradeCount.hasOwnProperty(grade)) {
        gradeCount[grade]++;
        totalGrades++;
        subjectData.push({
          name: subject.name,
          grade: subject.grade,
        });
      }
    });
  });

  return (
    <>
      <div className="p-3">
        {/* Analysis Section */}
        <ResultAnalysisLayout gradeCount={gradeCount} total={totalGrades} />
      </div>
      {/* Table Section */}
      <div className="grid gap-4 mt-2 md:grid-cols-2">
        {results.map((result, index) => (
          <div key={index}>
            <h2 className="uppercase text-lg font-semibold p-2">
              {result.semester} Semester
            </h2>
            <table className="min-w-max w-full table-auto border">
              <thead>
                <tr className="bg-[#337476] text-white uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left border-l-2">Subject</th>
                  <th className="py-3 px-6 text-left border-l-2">Grade</th>
                </tr>
              </thead>
              <tbody className="cursor-pointer text-sm font-light">
                {result.subjects.map((subject, index) => (
                  <tr
                    className={`${
                      index % 2 === 0 ? 'bg-[#7fb8ba]' : 'bg-[#6ba1a3]'
                    } hover:bg-[#88b6b8]`}
                    key={index}
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
          </div>
        ))}
      </div>
      {/* Prediction Section */}
      <div>
        <ResultPredict subjectData={subjectData} />
      </div>
    </>
  );
}
