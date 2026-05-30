import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const skillData = [
  { skill: 'Python/R', level: 95 },
  { skill: 'Causal Inference', level: 90 },
  { skill: 'Machine Learning', level: 88 },
  { skill: 'Data Visualization', level: 85 },
  { skill: 'Statistical Analysis', level: 92 },
  { skill: 'Deep Learning', level: 80 },
  { skill: 'NLP', level: 78 },
  { skill: 'Computer Vision', level: 75 },
  { skill: 'LLMs', level: 82 },
];

export function SkillsChart() {
  return (
    <div className="p-6">
      <h3 className="text-white text-lg font-bold mb-4">Technical Proficiency</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={skillData}>
          <PolarGrid stroke="#282828" />
          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: '#b3b3b3', fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: '#6a6a6a', fontSize: 10 }}
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
