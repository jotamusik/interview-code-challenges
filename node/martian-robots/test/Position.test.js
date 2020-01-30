import { Position } from "../src/Position";

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
  test('Should move forward', () => {
    let x = 2;
    let y = 3;
    let orientation = 'N';
    let position = new Position(x, y, orientation);

    position.move('F');

    expect(position.getX()).toBe(x);
    expect(position.getY()).toBe( (y + 1) );
    expect(position.getOrientation()).toBe(orientation);
  });
  test('Should move left', () => {
    let x = 2;
    let y = 3;
    let orientation = 'N';
    let position = new Position(x, y, orientation);

    position.move('L');

    expect(position.getX()).toBe(x);
    expect(position.getY()).toBe(y);
    expect(position.getOrientation()).toBe('W');
  });
  test('Should move right', () => {
    let x = 2;
    let y = 3;
    let orientation = 'W';
    let position = new Position(x, y, orientation);

    position.move('R');

    expect(position.getX()).toBe(x);
    expect(position.getY()).toBe(y);
    expect(position.getOrientation()).toBe('N');
  });
});
