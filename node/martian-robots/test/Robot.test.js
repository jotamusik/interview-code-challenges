import { Position } from "../src/Position";
import { Robot } from "../src/Robot";

describe('Robot', () => {
  test('Should have a position', () => {
    let x = 2;
    let y = 3;
    let orientation = 'N';
    let position = new Position(x, y, orientation);
    let robot = new Robot(position);
    expect(robot.getPosition().getX()).toBe(x);
    expect(robot.getPosition().getY()).toBe(y);
    expect(robot.getPosition().getOrientation()).toBe(orientation);
  });
  test('Should move forward', () => {
    let x = 2;
    let y = 3;
    let orientation = 'N';
    let position = new Position(x, y, orientation);
    let robot = new Robot(position);
    robot.move('F');
    expect(robot.getPosition().getX()).toBe(x);
    expect(robot.getPosition().getY()).toBe( (y + 1) );
    expect(robot.getPosition().getOrientation()).toBe(orientation);
  });
  test('Should move left', () => {
    let x = 2;
    let y = 3;
    let orientation = 'N';
    let position = new Position(x, y, orientation);
    let robot = new Robot(position);
    robot.move('L');
    expect(robot.getPosition().getX()).toBe(x);
    expect(robot.getPosition().getY()).toBe(y);
    expect(robot.getPosition().getOrientation()).toBe('W');
  });
  test('Should move right', () => {
    let x = 2;
    let y = 3;
    let orientation = 'N';
    let position = new Position(x, y, orientation);
    let robot = new Robot(position);
    robot.move('R');
    expect(robot.getPosition().getX()).toBe(x);
    expect(robot.getPosition().getY()).toBe(y);
    expect(robot.getPosition().getOrientation()).toBe('E');
  });
});
