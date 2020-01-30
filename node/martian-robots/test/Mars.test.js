import { Mars } from "../src/Mars";

describe('Mars Planet', () => {
  test('Should have defined a size', () => {
    let width = 5;
    let height = 3;
    let mars = new Mars(width, height);

    expect(mars.getHeight()).toBe(height);
    expect(mars.getWidth()).toBe(width)
  });
});
