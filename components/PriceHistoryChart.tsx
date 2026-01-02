'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function PriceHistoryChart({ data }: any) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mt-6">
      <h2 className="font-semibold mb-2">Item Price History</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
