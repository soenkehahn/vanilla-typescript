import { app } from "./.";
import fetch from "node-fetch";
import { Server } from "net";

describe("app", () => {
  let server: Server;
  let baseUrl: string;

  beforeEach(async () => {
    server = app.listen();
    baseUrl = `http://localhost:${(server.address() as any).port}`;
  });

  afterAll(() => {
    server.close();
  });

  it("serves a 'hello world' endpoint", async () => {
    const response = await fetch(`${baseUrl}/hello-world`);
    expect(response.status).toEqual(200);
    expect(await response.text()).toEqual("hello world");
  });
});
