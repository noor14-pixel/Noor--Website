import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const skillData = [
  { skill: 'Python/R', level: 95 },
  { skill: 'Causal Inf.', level: 90 },
  { skill: 'ML', level: 88 },
  { skill: 'Data Viz', level: 85 },
  { skill: 'Statistics', level: 92 },
  { skill: 'Deep Learning', level: 80 },
  { skill: 'NLP', level: 78 },
  { skill: 'CV', level: 75 },
  { skill: 'LLMs', level: 82 },
];

export function SkillsChart() {
  return (
    <div className="p-6">
      <h3 className="text-white text-lg font-bold mb-4">Technical Proficiency</h3>
      <ResponsiveContainer width="100%" height={320}>
        <RadarChart data={skillData} margin={{ top: 20, right: 40, bottom: 20, left: 40 }}>
          <PolarGrid stroke="#282828" />
          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: '#b3b3b3', fontSize: 11 }}
            tickLine={false}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: '#6a6a6a', fontSize: 9 }}
            tickCount={4}
          />
          <Radar
            name="Skill Level"
            dataKey="level"
            stroke="#1ed760"
            fill="#1ed760"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
