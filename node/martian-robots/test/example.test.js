import { Mars } from "../src/example";


describe('Mars Planet', () => {
  test('Should have defined a size', () => {
    let width = 5;
    let height = 3;
    let mars = Mars(width, height);

    expect(mars.getHeight()).toBe(height);
    expect(mars.getWidth()).toBe(width)
  });
});

describe('Robot', () => {
  test('Should ', () => {

  });
});