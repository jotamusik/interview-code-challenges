import fs from 'fs';
import { MartianRobotsGame } from "../src/MartianRobotsGame";

describe("MartianRobotsGame", () => {
  test("Should Work Fine", () => {
    let input = fs.readFileSync('./test/sampleInput.txt');
    let output = MartianRobotsGame(input.toString());
    let expectedOutput = fs.readFileSync('./test/sampleOutput.txt');

    expect(output).toBe(expectedOutput.toString());
  });
});
