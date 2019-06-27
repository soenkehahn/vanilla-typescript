all: setup check test

setup:
  yarn

check:
  tsc --project . --noEmit

test:
  jest --env jsdom

watch:
  jest --env jsdom --watch

watch-check:
  tsc --project . --noEmit --watch

serve:
  parcel src/index.html
