"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const chai_1 = __importDefault(require("chai"));
const expect = chai_1.default.expect;
const loginServices_1 = __importDefault(require("../services/loginServices"));
(0, node_test_1.describe)("POST /login", () => {
    it("health should be okay", async () => {
        try {
            const actualResult = await loginServices_1.default.login({
                user_name: "tuanhuy1",
                pass_word: "Huy02012002",
            });
            expect(actualResult);
        }
        catch (error) {
            throw new Error("⚠️ Unexpected failure!");
        }
    });
});
