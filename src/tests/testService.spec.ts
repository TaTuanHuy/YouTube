// import { describe } from "node:test";
// import jest from "jest";
import { describe, expect, test, afterEach } from "@jest/globals";
import request from "supertest";
import app from "../app";
import "reflect-metadata";
import { Container } from "typedi";
import videoServices from "../services/videoServices";
import connection from "../loaders/connect";

// describe("POST get my video", () => {
//   it("should return a product", async () => {
//     const res = await request(app).post("/user/profile").send({
//       token:
//         "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJIdXk3ODkiLCJwYXNzX3dvcmQiOiIxMjMiLCJpYXQiOjE2ODU5NTE5NzQsImV4cCI6MTY4NTk1NTU3NH0.NRrjHzafK8jkNjsNeB9LS41TzTpcOpbbAGI8c2SDMXcGAkz2J1JsAtj5KH2O1KCHg1XWZMqrc4-fbVpR794sFA",
//     });
//     // console.log(res);
//     // expect(res.statusCode).toBe(200);
//     expect(res.body.user_id).toBe("Huy789");
//     // toBe("Product 1");
//   });
// });
Container.set("connectMySql", connection);
describe("health", () => {
  afterEach(async () => {
    (await connection).end();
    console.log("Ran after all the test suites");
  });

  describe("list my video", () => {
    it("return my Video", async () => {
      const result = await videoServices.GetProfileVideo(
        "tuanhuy2",
        "l0yKQLaNk5g"
      );
      expect(result.video_id).toBe("l0yKQLaNk5g");
    });
  });
});

// Container.set("connectMySql", connection);
// describe("list my video", () => {
//   it("return my list Video", async () => {
//     const result = await videoServices.GetListVideo("tuanhuy2");
//     expect(result[0].video_name).toBe("Nhạc văn mai hương");
//   });
// });
