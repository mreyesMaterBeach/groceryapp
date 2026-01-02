'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard({ receipts, onSelect }: any) {
  const data = receipts.map(r => ({
    month: r.date,
    total: r.items.reduce((a: number, i: any) => a + i.price, 0),
  }));

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <h2 className="font-semibold mb-2">Monthly Spend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="total" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
