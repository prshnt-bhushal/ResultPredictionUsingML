import React from 'react';

export default function TableLayout({ semNum }) {
  return (
    <div className="flex justify-between gap-10 p-4">
      <span className="text-xl font-bold p-4">{semNum} Semester</span>
      <div>
        {/*  table of 6 column  */}
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="border bg-slate-500 px-4 py-2">Subject Code</th>
              <th class="border bg-slate-500 px-4 py-2">Subject</th>
              <th class="border bg-slate-500 px-4 py-2">Credit</th>
              <th class="border bg-slate-500 px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100">
              <td class="px-4 py-2">Subject 1</td>
              <td class="px-4 py-2">Sub X</td>
              <td class="px-4 py-2">4</td>
              <td class="px-4 py-2">A+</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-2">Subject 2</td>
              <td class="px-4 py-2">Sub X</td>
              <td class="px-4 py-2">4</td>
              <td class="px-4 py-2">A+</td>
            </tr>
            <tr class="bg-gray-100">
              <td class=" px-4 py-2">Subject 3</td>
              <td class=" px-4 py-2">Sub X</td>
              <td class=" px-4 py-2">4</td>
              <td class=" px-4 py-2">A+</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-2">Subject 4</td>
              <td class="px-4 py-2">Sub X</td>
              <td class="px-4 py-2">4</td>
              <td class="px-4 py-2">A+</td>
            </tr>
            <tr class="bg-gray-100">
              <td class=" px-4 py-2">Subject 5</td>
              <td class=" px-4 py-2">Sub X</td>
              <td class=" px-4 py-2">4</td>
              <td class=" px-4 py-2">A+</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-2">Subject 6</td>
              <td class="px-4 py-2">Sub X</td>
              <td class="px-4 py-2">4</td>
              <td class="px-4 py-2">A+</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="px-4 py-2">SGPA :</td>
              <td class="px-4 py-2"></td>
              <td class="px-4 py-2"></td>
              <td class="px-4 py-2">3.89</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
