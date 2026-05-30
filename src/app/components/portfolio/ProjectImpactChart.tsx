import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const impactData = [
  { project: 'CERP RCT', impact: 80000, color: '#1DB954' },
  { project: 'Women in Informal Economy', impact: 11650, color: '#17a348' },
  { project: 'WASH Impact', impact: 3986, color: '#5dba78' },
  { project: 'AI Screenwriting', impact: 100, color: '#8fd19e' },
];

export function ProjectImpactChart() {
  return (
    <div className="p-6">
      <h3 className="text-white text-lg font-bold mb-2">Research Impact Scale</h3>
      <p className="text-[#b3b3b3] text-sm mb-4">Number of participants/observations across projects</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={impactData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#282828" />
          <XAxis
            type="number"
            tick={{ fill: '#b3b3b3', fontSize: 11 }}
            scale="log"
            domain={[1, 100000]}
          />
          <YAxis
            type="category"
            dataKey="project"
            tick={{ fill: '#b3b3b3', fontSize: 11 }}
            width={150}
          />
          <Tooltip
            contentStyle={{
              background: '#282828',
              border: '1px solid #404040',
              borderRadius: '4px',
              color: '#ffffff'
            }}
            formatter={(value: number) => value.toLocaleString() + ' participants'}
          />
          <Bar dataKey="impact" radius={[0, 4, 4, 0]}>
            {impactData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
