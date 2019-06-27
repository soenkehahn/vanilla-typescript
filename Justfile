all: setup check test run

setup:
  yarn

check:
  tsc --strict --noEmit $(fd '\.ts$' src)

run:
  ts-node src/index.ts

test:
  jest

watch:
  jest --watch

watch-check:
  tsc --strict --noEmit $(fd '\.ts$' src) --watch
