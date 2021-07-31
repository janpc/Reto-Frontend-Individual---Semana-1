export function getMostValuatedHardSkills(hardSkills) {
  const mostValuatedHardSkills = [];
  const caption = {};
  const data = {};

  hardSkills.forEach((skill) => {
    if (mostValuatedHardSkills.length < 5) {
      mostValuatedHardSkills.push(skill);
    } else if (mostValuatedHardSkills[4].points < skill.points) {
      mostValuatedHardSkills[4] = skill;
    }

    mostValuatedHardSkills.sort((a, b) => b.points - a.points);
  });

  mostValuatedHardSkills.forEach((skill) => {
    data[skill.name] = skill.points / mostValuatedHardSkills[0].points;
    caption[skill.name] = `${skill.name}: ${skill.points}pts`;
  });

  return { data, caption };
}

export function getSoftSkillsData(softSkills) {
  const caption = {};
  const data = {};

  softSkills.forEach((skill) => {
    data[skill.name] = skill.points / skill.total;
    caption[skill.name] = `${skill.name}`;
  });

  return { data, caption };
}
