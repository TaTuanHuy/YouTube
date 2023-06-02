// import { describe } from "node:test";
import jest from "jest";
import express from "express";
import request from "supertest";
const app = express();
import "reflect-metadata";
import videoServices from "../services/videoServices";

// import Login from "../services/loginServices";
// describe("POST get my video", () => {
//   it("should return a product", async () => {
//     const res = await request(app).post("/user/profile").send({
//       token:
//         "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJIdXk3ODkiLCJwYXNzX3dvcmQiOiIxMjMiLCJpYXQiOjE2ODU3MDAyODgsImV4cCI6MTY4NTcwMzg4OH0.8XYJAPIGqoU8JSz2pi2fR3atLT5CiEoZxeepOjfZzcyxgTL0HHcj0O7wP3cpB-UHpElxlkYkf8EQ7_crxOcrgA",
//     });
//     // console.log(res);
//     // expect(res.statusCode).toBe(200);
//     expect(res.body.user_id).toBe("Huy789");
//     // toBe("Product 1");
//   });
// });

describe("list my video", () => {
  it("should return list product", async () => {
    const result = await videoServices.GetProfileVideo(
      "tuanhuy2",
      "l0yKQLaNk5g"
    );
    expect(result.video_id).toBe("l0yKQLaNk5g");
  });
});
