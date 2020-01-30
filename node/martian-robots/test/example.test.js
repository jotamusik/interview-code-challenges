import { Mars, Position } from "../src/example";


describe('Mars Planet', () => {
  test('Should have defined a size', () => {
    let width = 5;
    let height = 3;
    let mars = new Mars(width, height);

    expect(mars.getHeight()).toBe(height);
    expect(mars.getWidth()).toBe(width)
  });
});

describe('Position', () => {
  test('Should have a x coordinate', () => {
    let x = 2;
    let y = 3;
    let orientation = 'N';
    let position = new Position(x, y, orientation);

    expect(position.getX()).toBe(x);
  });
  test('Should have a y coordinate', () => {
    let x = 2;
    let y = 3;
    let orientation = 'N';
    let position = new Position(x, y, orientation);

    expect(position.getY()).toBe(y);
  });
  test('Should have an orientation', () => {
    let x = 2;
    let y = 3;
    let orientation = 'N';
    let position = new Position(x, y, orientation);

    expect(position.getOrientation()).toBe(orientation);
  });
});

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
});