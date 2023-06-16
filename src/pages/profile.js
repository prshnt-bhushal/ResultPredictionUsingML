import React from 'react';
import Layout from '../../components/Layout';
import ResultAnalysisLayout from '../../components/ResultAnalysisLayout';
import TableLayout from '../../components/TableLayout';

export default function profile() {
  return (
    <Layout title="User Profile">
      <div className="w-full pt-[80px] p-10">
        {/* User Details */}
        <div className="flex font-semibold gap-2">
          <span>Welcome User</span>
          <span>SymbolNumber</span>
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
            <TableLayout semNum="1st" />
            <TableLayout semNum="2nd" />
            <TableLayout semNum="3rd" />
            <TableLayout semNum="4th" />
            <TableLayout semNum="5th" />
            <TableLayout semNum="6th" />
            <TableLayout semNum="7th" />
            <TableLayout semNum="8th" />
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
