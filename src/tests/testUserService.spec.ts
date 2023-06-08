import { describe, expect, test, afterEach } from "@jest/globals";
import request from "supertest";
import "reflect-metadata";
import { Container } from "typedi";
import UserService from "../services/userServices";
import connection from "../loaders/connect";

describe("health", () => {
  Container.set("connectMySql", connection);
  // beforeEach(async () => {
  //   (await connection).connect();
  //   console.log("Ran before all the test suites");
  // });

  // afterEach(async () => {
  //   (await connection).end();
  //   console.log("Ran after all the test suites");
  //   // Container.remove("connectMySql");
  // });

  describe("User Setting", () => {
    it("createUser", async () => {
      const result = await UserService.createUser({
        user_name: "Test User",
        pass_word: "1234",
        full_name: "Test Case",
        user_id: "testUser",
      });
      expect(result).toBe("Success");
    });

    it("Update User", async () => {
      const result = await UserService.updateUser("Test User", {
        user_name: "Update test User",
        pass_word: "1234",
        full_name: "Test Case",
        user_id: "testUser",
      });
      expect(result).toBe("Update Success");
    });

    it("get Profile User", async () => {
      const result = await UserService.getProfileUser("Update test User");
      expect(result.user_id).toBe("testUser");
      (await connection).end();
    });
  });
});
