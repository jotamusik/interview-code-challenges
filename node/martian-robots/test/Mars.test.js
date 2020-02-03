import { Mars } from "../src/Mars";

describe('Mars Planet', () => {
  test('should have defined a width and a height', () => {
    const mars = Mars(2, 3);
    expect(mars.getHeight()).toBe(3);
    expect(mars.getWidth()).toBe(2);
  });
  test('should be able to check if someone has lost in a position', () => {
    const mars = Mars(2, 3);
    mars.initPlanet();
    expect(mars.hasSomeoneLostHere(0,0)).toBeFalsy();
  });
  test('should be able to set where someone has lost', () => {
    const mars = Mars(2, 3);
    mars.initPlanet();
    mars.setLostHere(0, 0);
    expect(mars.hasSomeoneLostHere(0, 0)).toBeTruthy();
  });
});
