import { Robot } from "../src/Robot";

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
});
