import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import ResultAnalysisLayout from '../../components/ResultAnalysisLayout';
import TableLayout from '../../components/TableLayout';
import { useSession } from 'next-auth/react';

export default function Profile() {
  const [results, setResults] = useState([]);
  const { status, data: session } = useSession();

  useEffect(() => {
    // Fetch the results for the logged-in user
    fetch('/api/results')
      .then((response) => response.json())
      .then((data) => setResults(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Layout title="User Profile">
      <div className="w-full pt-[80px] p-10">
        {/* User Details */}
        <div className="flex font-semibold gap-2">
          {/* <span>Welcome {session.user.name}</span> */}
          {/* <span>SymbolNumber : {session.user.sNum}</span> */}
          <span>Your Results:</span>
        </div>
        <div className="flex justify-between">
          {/* Result Analysis Part */}
          <div>
            <span>Result Analysis</span>
            <ResultAnalysisLayout />
          </div>
          {/* Result of Semester table*/}
          <div className="">
            <TableLayout results={results} />
          </div>
        </div>
        {/* Predict next Result */}
        <div>
          <span>Predict Next Result</span>
          <div>
            <button>Click to Predict</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
