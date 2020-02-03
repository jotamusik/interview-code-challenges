import fs from 'fs';
import { PlayMartianRobotsGame } from "../src/PlayMartianRobotsGame";

describe("MartianRobotsGame", () => {
  test("Should Work Fine", () => {
    const input = fs.readFileSync('./test/sampleInput.txt');
    const output = PlayMartianRobotsGame(input.toString());
    const expectedOutput = fs.readFileSync('./test/sampleOutput.txt');

    expect(output).toBe(expectedOutput.toString());
  });
});
