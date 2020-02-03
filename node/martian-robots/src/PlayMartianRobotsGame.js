import { Robot } from "./Robot";
import { Mars } from "./Mars";


export const PlayMartianRobotsGame = (input) => {
  const lines = input.split('\n');
  const width = Number(lines[0].split(' ')[0]);
  const height = Number(lines[0].split(' ')[1]);

  const getRobotInfo = (lines, robotIndex) => {
    const x = Number(lines[robotIndex].split(' ')[0]);
    const y = Number(lines[robotIndex].split(' ')[1]);
    const orientation = lines[robotIndex].split(' ')[2];
    return { x, y, orientation };
  };

  const mars = Mars(width + 1, height + 1);
  mars.initPlanet();
  const missionStatus = [];

  const linesToReadPerRobot = 2;
  for ( let i = 1; i < lines.length; i+=linesToReadPerRobot ) {
    const { x, y, orientation } = getRobotInfo(lines, i);
    const mission = lines[i+1];
    const robot = Robot(x, y, orientation);
    missionStatus.push(robot.startMission(mission, mars));
  }
  return missionStatus.join('\n');
};
