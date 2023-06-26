"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config/config"));
const app = (0, express_1.default)();
const port = config_1.default.port;
const mainRouter_1 = __importDefault(require("../api/router/mainRouter"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
// import fetch from "node-fetch";
// import redis from "redis";
const axios_1 = __importDefault(require("axios"));
const redis_1 = require("redis");
exports.default = async ({ app }) => {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cookie_parser_1.default)());
    app.use((0, cors_1.default)());
    app.use(express_1.default.static("../src/public"));
    let redisClient;
    (async () => {
        redisClient = (0, redis_1.createClient)({
            // url: "redis://alice:foobared@awesome.redis.server:6380",
            socket: {
                host: "127.0.0.1",
                port: 6379,
            },
        });
        redisClient.on("error", (error) => console.error(`Error : ${error}`));
        redisClient.on("connect", () => {
            console.log("Connected!");
        });
        await redisClient.connect();
    })();
    //Getdata to set cache
    async function getData() {
        const result = await axios_1.default.get(`http://localhost:8000`);
        console.log(result.data);
        return result.data;
    }
    async function getSpeciesData(req, res) {
        let isCached = false;
        let results;
        try {
            const cacheResults = await redisClient.get("test");
            if (cacheResults) {
                isCached = true;
                results = JSON.parse(cacheResults);
            }
            else {
                results = await getData();
                if (results.length === 0) {
                    throw "API returned an empty array";
                }
                await redisClient.set("test", JSON.stringify(results));
            }
            return res.json(results.length);
        }
        catch (error) {
            console.error(error);
        }
    }
    app.get("/testRedis", getSpeciesData);
    (0, mainRouter_1.default)(app);
    app.listen(port, () => {
        console.log(`Example app listening on port http://localhost:${port}`);
    });
};
