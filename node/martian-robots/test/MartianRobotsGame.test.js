import fs from 'fs';

describe("MartianRobotsGame", () => {
  test("Should Work Fine", () => {
    let input = fs.readFileSync('./sampleInput.txt');
    let output = new MartianRobotsGame(input);
    let expectedOutput = fs.readFileSync('./sampleOutput.txt');

    expect(output).toBe(expectedOutput);
  });
});
