import { Robot } from "../src/Robot";

function initializeMap(rows, cols) {
  const map = [];
  for ( let i = 0; i < rows; i++ ) {
    map[i] = [];
    for ( let j = 0; j < cols; j++ ) {
      map[i][j] = false;
    }
  }
  return map;
}

describe('Robot', () => {
  test('Should have a position and an orientation', () => {
    let x = 2;
    let y = 3;
    let orientation = 'N';
    let robot = new Robot(x, y, orientation);
    expect(robot.getX()).toBe(x);
    expect(robot.getY()).toBe(y);
    expect(robot.getOrientation()).toBe(orientation);
  });
  test('should start a mission', () => {
    let x = 2;
    let y = 3;
    let orientation = 'N';
    let robot = new Robot(x, y, orientation);
    const mission = 'F';
    const map = initializeMap(5, 3);
    expect(robot.startMission(mission, map)).toBe('2 4 N');
  });
});
