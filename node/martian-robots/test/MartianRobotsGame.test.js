import fs from 'fs';
import { PlayMartianRobotsGame } from "../src/PlayMartianRobotsGame";

describe("MartianRobotsGame", () => {
  test("Should Work Fine", () => {
    let input = fs.readFileSync('./test/sampleInput.txt');
    let output = PlayMartianRobotsGame(input.toString());
    let expectedOutput = fs.readFileSync('./test/sampleOutput.txt');

    expect(output).toBe(expectedOutput.toString());
  });
});
