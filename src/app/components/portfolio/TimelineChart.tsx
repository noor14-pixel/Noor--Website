import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const timelineData = [
  { year: '2023', projects: 2, experience: 1 },
  { year: '2024', projects: 3, experience: 2 },
  { year: '2025', projects: 5, experience: 4 },
  { year: '2026', projects: 6, experience: 5 },
];

export function TimelineChart() {
  return (
    <div className="p-6">
      <h3 className="text-white text-lg font-bold mb-2">Professional Growth</h3>
      <p className="text-[#b3b3b3] text-sm mb-4">Cumulative projects and experience over time</p>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={timelineData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#282828" />
          <XAxis
            dataKey="year"
            tick={{ fill: '#b3b3b3', fontSize: 11 }}
          />
          <YAxis
            tick={{ fill: '#b3b3b3', fontSize: 11 }}
          />
          <Tooltip
            contentStyle={{
              background: '#282828',
              border: '1px solid #404040',
              borderRadius: '4px',
              color: '#ffffff'
            }}
          />
          <Area
            type="monotone"
            dataKey="projects"
            stackId="1"
            stroke="#1ed760"
            fill="#1ed760"
            fillOpacity={0.6}
            name="Projects"
          />
          <Area
            type="monotone"
            dataKey="experience"
            stackId="2"
            stroke="#1fdf64"
            fill="#1fdf64"
            fillOpacity={0.4}
            name="Positions"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
