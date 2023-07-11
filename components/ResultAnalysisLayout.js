import { useState } from 'react';

export default function ResultAnalysisLayout({ gradeCount, total }) {
  const chartData = Object.values(gradeCount);
  const labels = [
    'A',
    'A-',
    'B+',
    'B',
    'B-',
    'C+',
    'C',
    'C-',
    'D+',
    'D',
    'F',
    'Abs',
    'Expe',
    'CNR',
  ];

  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipX, setTooltipX] = useState(0);
  const [tooltipY, setTooltipY] = useState(0);

  const showTooltip = (e, count) => {
    setTooltipContent(`${labels[count]}: ${chartData[count]}`);
    setTooltipX(e.target.offsetLeft - e.target.clientWidth);
    setTooltipY(e.target.clientHeight + e.target.clientWidth);
    setTooltipOpen(true);
  };

  const hideTooltip = () => {
    setTooltipContent('');
    setTooltipOpen(false);
    setTooltipX(0);
    setTooltipY(0);
  };

  return (
    <div className="w-lg px-4">
      <div className="max-w-lg mx-auto py-5">
        <div className="shadow p-6 rounded-lg bg-white">
          <div className="md:flex md:justify-between md:items-center">
            {/* <div>
              <h2 className="text-xl text-gray-800 font-bold p-2 leading-tight">
                Past Results
              </h2>
            </div> */}

            <div className="mb-4 flex">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#337476] mr-2 rounded-full"></div>
                <div className="text-sm p-1">Grades |</div>
              </div>
              <div className="flex items-center text-sm">
                <div className="p-1">Total Attempts :</div>
                <div className="">{total}</div>
              </div>
            </div>
          </div>

          <div className="line my-8 relative">
            {tooltipOpen && (
              <div
                style={{ bottom: `${tooltipY}px`, left: `${tooltipX}px` }}
                className="p-0 m-0 z-10 shadow-lg rounded-lg absolute h-auto block"
              >
                <div className="shadow-xs rounded-lg bg-white p-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="font-bold ml-2">
                      <span
                        dangerouslySetInnerHTML={{ __html: tooltipContent }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex -mx-2 items-end mb-2">
              {chartData.map((grade, count) => (
                <div key={labels[count]} className="px-2 w-1/6">
                  <div
                    style={{ height: `${grade}0px` }}
                    className="transition ease-in duration-200 bg-[#337476] hover:bg-blue-400 relative"
                    onMouseEnter={(e) => showTooltip(e, count)}
                    onMouseLeave={hideTooltip}
                  >
                    <div className="text-center absolute top-0 left-0 right-0 -mt-6 text-gray-800 text-sm">
                      {grade}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="border-t border-gray-400 mx-auto"
              style={{
                height: '1px',
                width: `${100 - (1 / chartData.length) * 100 + 3}%`,
              }}
            ></div>
            <div className="flex -mx-2 items-end">
              {labels.map((data, index) => (
                <div key={index} className="px-2 w-1/6">
                  <div className="bg-red-600 relative">
                    <div
                      className="text-center absolute top-0 left-0 right-0 h-2 -mt-px bg-gray-400 mx-auto"
                      style={{ width: '1px' }}
                    ></div>
                    <div className="text-center absolute top-0 left-0 right-0 mt-3 text-gray-700 text-sm">
                      {data}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
