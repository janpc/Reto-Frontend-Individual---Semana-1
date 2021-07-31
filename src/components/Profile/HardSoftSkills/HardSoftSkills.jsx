import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

import { Title, ValidatedSkills, OtherSkills, Skill } from './style';

import { EditPosition } from '../../../style/main';
import { Card } from '../../../style/main';

import { Edit } from '../../../icons';
import { getMostValuatedHardSkills, getSoftSkillsData } from '../../../helpers';
import colors from '../../../style/colors';

export default function HardSoftSkills({ userInfo }) {
  const { name, hardSkills, softSkills } = userInfo;

  const mostValuatedHardSkills = getMostValuatedHardSkills(hardSkills);

  const softSkillsData = getSoftSkillsData(softSkills);

  console.log(mostValuatedHardSkills);

  return (
    <Card>
      <Title>{`Perfil validado en Nuwe de ${name}:`}</Title>

      <ValidatedSkills>
        <legend>Hard skills validadas por NUWE</legend>
        <h3>Top 5 dkills de {name}:</h3>
        <RadarChart
          captions={mostValuatedHardSkills.caption}
          data={[
            {
              data: mostValuatedHardSkills.data,
              meta: { color: colors.primary.main }
            }
          ]}
          size={300}
          options={{
            zoomDistance: 1,
            captionMargin: 50,
            scaleProps: () => ({ fill: colors.secondary.main }),
            captionProps: () => ({
              className: 'caption',
              textAnchor: 'middle',
              fontSize: 16,
              fontFamily: 'sans-serif',
              fill: colors.primary.main
            })
          }}
        />
        <p>Otras skills validadas:</p>
        <OtherSkills>
          {hardSkills.map((skill) => (
            <Skill key={skill.name}>
              <img
                alt={skill.name}
                src={`https://cdn.svgporn.com/logos/${skill.name}.svg`}
              />
              <p>{skill.points}pts</p>
            </Skill>
          ))}
        </OtherSkills>
      </ValidatedSkills>
      <ValidatedSkills>
        <legend>Soft skills validadas por NUWE</legend>
        <h3>Puntuaciones obtenidas en los retos grupales:</h3>
        <RadarChart
          captions={softSkillsData.caption}
          data={[
            {
              data: softSkillsData.data,
              meta: { color: colors.primary.main }
            }
          ]}
          size={300}
          options={{
            zoomDistance: 1,
            captionMargin: 50,
            scaleProps: () => ({ fill: colors.secondary.main }),
            captionProps: () => ({
              className: 'caption',
              textAnchor: 'middle',
              fontSize: 16,
              fontFamily: 'sans-serif',
              fill: colors.primary.main
            })
          }}
        />
      </ValidatedSkills>
    </Card>
  );
}
