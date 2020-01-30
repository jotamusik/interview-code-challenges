import { Mars } from "../src/Mars";
import { Position } from "../src/Position";
import { Robot } from "../src/Robot";

describe('Mars Planet', () => {
  test('Should have defined a size', () => {
    let width = 5;
    let height = 3;
    let mars = new Mars(width, height);

    expect(mars.getHeight()).toBe(height);
    expect(mars.getWidth()).toBe(width)
  });
  test('Should be able to start a mission', () => {
    let width = 5;
    let height = 3;
    let mars = new Mars(width, height);
    let missionStatus = mars.newMission(new Robot(new Position(1, 1, 'E')), 'RFRFRFRF');

    expect(missionStatus).toBe('1 1 E');
  });
});
