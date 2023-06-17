export default function TableLayout({ results }) {
  return (
    <div className="flex justify-between gap-10 p-4">
      <span className="text-xl font-bold p-4">{results[0]?.semester}</span>
      <div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border bg-slate-500 px-4 py-2">Subjects</th>
              <th className="border bg-slate-500 px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {results[0]?.subjects.map((subjects, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="px-4 py-2">{subjects.name}</td>
                <td className="px-4 py-2">{subjects.grade}</td>
              </tr>
            ))}
            <tr className="bg-gray-100">
              <td className="px-4 py-2">SGPA:</td>
              <td className="px-4 py-2">{results[0]?.sgpa}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
