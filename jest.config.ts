import type { JestConfigWithTsJest } from "ts-jest";
import { defaults as tsjPreset } from "ts-jest/presets";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  transform: {
    ...tsjPreset.transform,
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        compiler: "typescript",
      },
    ],
  },
  testMatch: ["**/*.test.ts"],
};

export default jestConfig;
