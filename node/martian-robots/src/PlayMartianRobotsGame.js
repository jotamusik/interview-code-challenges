import { Robot } from "./Robot";
import { Mars } from "./Mars";


export const PlayMartianRobotsGame = (input) => {
  let lines = input.split('\n');
  let width = Number(lines[0].split(' ')[0]);
  let height = Number(lines[0].split(' ')[1]);

  const _getRobotInfo = (lines, robotIndex) => {
    let x = lines[robotIndex].split(' ')[0];
    let y = lines[robotIndex].split(' ')[1];
    let orientation = lines[robotIndex].split(' ')[2];
    return { x, y, orientation };
  };

  const mars = Mars(width + 1, height + 1);
  let missionStatus = [];

  for ( let robotIndex = 1; robotIndex < lines.length; robotIndex+=2 ) {
    let { x, y, orientation } = _getRobotInfo(lines, robotIndex);
    let mission = lines[robotIndex+1];

    let robot = Robot(x, y, orientation);
    missionStatus.push(robot.startMission(mission, mars));
  }
  return missionStatus.join('\n');
};
