
import React from "react";

interface ChartData {
  labels: string[];
  datasets: {
    label?: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
    fill?: boolean;
    tension?: number;
  }[];
}

interface ChartProps {
  data: ChartData;
  className?: string;
}

export const BarChart: React.FC<ChartProps> = ({ data, className }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <div className="text-center">
        <div className="text-lg font-semibold text-gray-700">Bar Chart Placeholder</div>
        <div className="text-sm text-gray-500 mt-2">
          In a real app, this would display a bar chart using Recharts
        </div>
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <code className="text-xs text-gray-700 whitespace-pre-wrap">
            {JSON.stringify(data, null, 2)}
          </code>
        </div>
      </div>
    </div>
  );
};

export const LineChart: React.FC<ChartProps> = ({ data, className }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <div className="text-center">
        <div className="text-lg font-semibold text-gray-700">Line Chart Placeholder</div>
        <div className="text-sm text-gray-500 mt-2">
          In a real app, this would display a line chart using Recharts
        </div>
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <code className="text-xs text-gray-700 whitespace-pre-wrap">
            {JSON.stringify(data, null, 2)}
          </code>
        </div>
      </div>
    </div>
  );
};

export const PieChart: React.FC<ChartProps> = ({ data, className }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <div className="text-center">
        <div className="text-lg font-semibold text-gray-700">Pie Chart Placeholder</div>
        <div className="text-sm text-gray-500 mt-2">
          In a real app, this would display a pie chart using Recharts
        </div>
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <code className="text-xs text-gray-700 whitespace-pre-wrap">
            {JSON.stringify(data, null, 2)}
          </code>
        </div>
      </div>
    </div>
  );
};
