all: setup run

setup:
  yarn

run:
  ts-node src/index.ts
