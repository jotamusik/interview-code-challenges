import { Mars } from "../src/example";


describe('Mars Planet', () => {
  test('Should have defined a size', () => {
    let width = 5;
    let height = 3;
    let mars = new Mars(width, height);

    expect(mars.getHeight()).toBe(height);
    expect(mars.getWidth()).toBe(width)
  });
});

describe('Robot', () => {
  test('Should have a position', () => {
    let position = {
      x: 1,
      y: 2,
      orientation: 'N',
    };
    let robot = new Robot(position);
    expect(robot.getPosition().getX()).toBe(position.x);
    expect(robot.getPosition().getY()).toBe(position.y);
    expect(robot.getPosition().getOrientation()).toBe(position.orientation);
  });
});