module.exports = {
  globals: {
    "ts-jest": {}
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testMatch: ["**/src/*.test.ts"],
  testEnvironment: "node"
};
