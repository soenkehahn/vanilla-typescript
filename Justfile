all: setup check test run

setup:
  yarn

check:
  tsc --project . --noEmit

run:
  ts-node src/index.ts

test:
  jest --env jsdom

watch:
  jest --env jsdom --watch

watch-check:
  tsc --project . --noEmit --watch
