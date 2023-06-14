"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
require("reflect-metadata");
const typedi_1 = require("typedi");
const videoServices_1 = __importDefault(require("../services/videoServices"));
const connect_1 = __importDefault(require("../loaders/connect"));
(0, globals_1.describe)("health", () => {
    typedi_1.Container.set("connectMySql", connect_1.default);
    // beforeEach(async () => {
    //   (await connection).connect();
    //   console.log("Ran before all the test suites");
    // });
    // afterEach(async () => {
    //   (await connection).end();
    //   console.log("Ran after all the test suites");
    //   // Container.remove("connectMySql");
    // });
    (0, globals_1.describe)("list my video", () => {
        it("return my Video", async () => {
            const result = await videoServices_1.default.GetProfileVideo("tuanhuy2", "l0yKQLaNk5g");
            (0, globals_1.expect)(result.video_id).toBe("l0yKQLaNk5g");
        });
        it("return my list Video", async () => {
            const result = await videoServices_1.default.GetListVideo("tuanhuy2");
            (0, globals_1.expect)(result[0].video_name).toBe("Nhạc văn mai hương");
        });
        it("upload my Video", async () => {
            const result = await videoServices_1.default.uploadVideo({
                video_name: "Huy123",
                video_id: "HJj_123mk",
                video_description: "Video Test Case",
                author_video: "huy1",
            });
            (0, globals_1.expect)(result).toBe("Success");
        });
        it("update my Video", async () => {
            const result = await videoServices_1.default.updateVideo("HJj_123mk", {
                video_name: "Huy123",
                video_id: "HJj_123mk",
                video_description: "Video Test Case update",
                author_video: "huy1",
            });
            (0, globals_1.expect)(result).toBe("Success");
        });
        it("delete my Video", async () => {
            const result = await videoServices_1.default.deleteVideo("HJj_123mk");
            (0, globals_1.expect)(result).toBe("Success");
            (await connect_1.default).end();
        });
    });
});
