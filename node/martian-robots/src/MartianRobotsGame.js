import { Mars } from "./Mars";
import { Position } from "./Position";

export const MartianRobotsGame = (input) => {
  let lines = input.split('\n');
  let maxWidth = lines[0].split(' ')[0];
  let maxHeight = lines[0].split(' ')[1];

  const positions = [maxWidth][maxHeight];

  for ( let robotIndex = 1; robotIndex < lines.length; robotIndex+=2 ) {
    let x = lines[robotIndex].split(' ')[0];
    let y = lines[robotIndex].split(' ')[1];
    let orientation = lines[robotIndex].split(' ')[2];
    let robot = new Robot(x, y, orientation);
    console.log(lines[robotIndex]);
    console.log(lines[robotIndex+1]);
  }
};
