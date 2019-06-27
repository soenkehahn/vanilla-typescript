import * as Koa from "koa";

export const app = new Koa();

app.use(async (ctx, next) => {
  if (ctx.url === "/hello-world") {
    ctx.body = "hello world";
  } else {
    await next();
  }
});

function run() {
  const port = 1234;
  app.listen(port);
  console.log(`listening on port ${port}`);
}

if (!module.parent) {
  run();
}
