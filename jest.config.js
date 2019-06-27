module.exports = {
  globals: {
    "ts-jest": {}
  },
  moduleFileExtensions: ["tsx", "js"],
  transform: {
    "^.+\\.tsx$": "ts-jest"
  },
  testMatch: ["**/src/*.test.tsx"],
  testEnvironment: "node"
};
