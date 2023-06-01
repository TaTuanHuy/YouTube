import { describe } from "node:test";
import chai from "chai";
const expect = chai.expect;

import Login from "../services/loginServices";

describe("POST /login", () => {
  it("Check Login", async () => {
    try {
      const actualResult = await Login.login({
        user_name: "tuanhuy1",
        pass_word: "Huy02012002",
      });
      expect(actualResult);
    } catch (error) {
      throw new Error("⚠️ Unexpected failure!");
    }
  });
});
