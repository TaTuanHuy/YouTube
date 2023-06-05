"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
require("reflect-metadata");
const typedi_1 = require("typedi");
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
// describe("list my video", () => {
//   it("should return list product", async () => {
//     const result = await videoServices.GetProfileVideo(
//       "tuanhuy2",
//       "l0yKQLaNk5g"
//     );
//     expect(result).toBe("l0yKQLaNk5g");
//   });
// });
console.log(typedi_1.Container.get("connectMySql"));
