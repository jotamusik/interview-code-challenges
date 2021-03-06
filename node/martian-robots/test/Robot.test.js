import { Robot } from "../src/Robot";

describe('Robot', () => {
  test('Should have a position and an orientation', () => {
    const x = 2;
    const y = 3;
    const orientation = 'N';
    const robot = new Robot(x, y, orientation);
    expect(robot.getX()).toBe(x);
    expect(robot.getY()).toBe(y);
    expect(robot.getOrientation()).toBe(orientation);
  });
  test('should move forward', () => {
    const x = 2;
    const y = 3;
    const orientation = 'N';
    const robot = new Robot(x, y, orientation);
    const mission = 'F';

    const planet = {
      hasSomeoneLostHere: jest.fn((x, y) => {
        if ( x === 2 && y === 3 ) {
          return false;
        }
      }),
      setLostHere: jest.fn(),
      getWidth: () => 6,
      getHeight: () => 4,
    };
    expect(robot.startMission(mission, planet)).toBe('2 3 N LOST');
  });
  test('should move left', () => {
    const x = 2;
    const y = 3;
    const orientation = 'N';
    const robot = new Robot(x, y, orientation);
    const mission = 'L';
    const planet = jest.fn(() => {
      return {
        hasSomeoneLostHere: () => false,
      }
    });
    expect(robot.startMission(mission, planet)).toBe('2 3 W');
  });
  test('should move right', () => {
    const x = 2;
    const y = 3;
    const orientation = 'N';
    const robot = new Robot(x, y, orientation);
    const mission = 'R';
    const planet = {
      hasSomeoneLostHere: () => false,
    };
    expect(robot.startMission(mission, planet)).toBe('2 3 E');
  });
  test('should do a mission', () => {
    const x = 3;
    const y = 2;
    const orientation = 'N';
    const robot = new Robot(x, y, orientation);
    const mission = 'FRRFLLFFRRFLL';
    const planet = {
      setLostHere: jest.fn(),
      hasSomeoneLostHere: () => false,
      getWidth: () => 6,
      getHeight: () => 4,
    };
    expect(robot.startMission(mission, planet)).toBe('3 3 N LOST');
  });
});
