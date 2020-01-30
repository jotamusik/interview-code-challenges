import { Robot } from "./Robot";

export const MartianRobotsGame = (input) => {
  let lines = input.split('\n');
  let maxWidth = lines[0].split(' ')[0];
  let maxHeight = lines[0].split(' ')[1];

  const map = [];
  for ( let i = 0; i < maxHeight; i++ ) {
    map[i] = [];
    for ( let j = 0; j < maxWidth; j++ ) {
      map[i][j] = false;
    }
  }

  for ( let robotIndex = 1; robotIndex < lines.length; robotIndex+=2 ) {
    let x = lines[robotIndex].split(' ')[0];
    let y = lines[robotIndex].split(' ')[1];
    let orientation = lines[robotIndex].split(' ')[2];
    let robot = new Robot(x, y, orientation);
    let mission = lines[robotIndex+1];
    robot.startMission(mission, map);
  }
};
