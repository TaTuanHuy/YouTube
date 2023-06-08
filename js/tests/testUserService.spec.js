"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
require("reflect-metadata");
const typedi_1 = require("typedi");
const userServices_1 = __importDefault(require("../services/userServices"));
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
    (0, globals_1.describe)("User Setting", () => {
        it("createUser", async () => {
            const result = await userServices_1.default.createUser({
                user_name: "Test User",
                pass_word: "1234",
                full_name: "Test Case",
                user_id: "testUser",
            });
            (0, globals_1.expect)(result).toBe("Success");
        });
        it("Update User", async () => {
            const result = await userServices_1.default.updateUser("Test User", {
                user_name: "Update test User",
                pass_word: "1234",
                full_name: "Test Case",
                user_id: "testUser",
            });
            (0, globals_1.expect)(result).toBe("Update Success");
        });
        it("get Profile User", async () => {
            const result = await userServices_1.default.getProfileUser("Update test User");
            (0, globals_1.expect)(result.user_id).toBe("testUser");
            (await connect_1.default).end();
        });
    });
});
