import { Robot } from "./Robot";
import { Mars } from "./Mars";

export const MartianRobotsGame = (input) => {
  let lines = input.split('\n');
  let width = parseInt(lines[0].split(' ')[0]);
  let height = parseInt(lines[0].split(' ')[1]);

  const mars = Mars(width + 1, height + 1);
  let missionStatus = [];

  for ( let robotIndex = 1; robotIndex < lines.length; robotIndex+=2 ) {
    let x = lines[robotIndex].split(' ')[0];
    let y = lines[robotIndex].split(' ')[1];
    let orientation = lines[robotIndex].split(' ')[2];
    let robot = Robot(x, y, orientation);
    let mission = lines[robotIndex+1];
    missionStatus.push(robot.startMission(mission, mars));
  }
  return missionStatus.join('\n');
};
