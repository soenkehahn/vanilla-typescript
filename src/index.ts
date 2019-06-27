export function add(a: number, b: number): number {
  return a + b;
}

function run() {
  console.log("hello world");
}

if (!module.parent) {
  run();
}
