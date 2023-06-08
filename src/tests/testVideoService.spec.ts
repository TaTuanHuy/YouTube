import { describe, expect, test, afterEach } from "@jest/globals";
import request from "supertest";
import "reflect-metadata";
import { Container } from "typedi";
import videoServices from "../services/videoServices";
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

  describe("list my video", () => {
    it("return my Video", async () => {
      const result = await videoServices.GetProfileVideo(
        "tuanhuy2",
        "l0yKQLaNk5g"
      );
      expect(result.video_id).toBe("l0yKQLaNk5g");
    });

    it("return my list Video", async () => {
      const result = await videoServices.GetListVideo("tuanhuy2");
      expect(result[0].video_name).toBe("Nhạc văn mai hương");
    });

    it("upload my Video", async () => {
      const result = await videoServices.uploadVideo({
        video_name: "Huy123",
        video_id: "HJj_123mk",
        video_description: "Video Test Case",
        author_video: "huy1",
      });
      expect(result).toBe("Success");
    });

    it("update my Video", async () => {
      const result = await videoServices.updateVideo("HJj_123mk", {
        video_name: "Huy123",
        video_id: "HJj_123mk",
        video_description: "Video Test Case update",
        author_video: "huy1",
      });
      expect(result).toBe("Success");
    });

    it("delete my Video", async () => {
      const result = await videoServices.deleteVideo("HJj_123mk");
      expect(result).toBe("Success");
      (await connection).end();
    });
  });
});
