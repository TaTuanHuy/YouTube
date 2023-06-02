"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
require("reflect-metadata");
const videoServices_1 = __importDefault(require("../services/videoServices"));
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
        const result = await videoServices_1.default.GetProfileVideo("tuanhuy2", "l0yKQLaNk5g");
        expect(result).toBe(true);
    });
});
