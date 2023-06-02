"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createToken_1 = __importDefault(require("../token/createToken"));
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../config/config"));
require("reflect-metadata");
let AuthSignIn = class AuthSignIn {
    contructor() { }
    // const conn = Container.get("connectMySql") as any;
    async login(reqBody) {
        const conn = (await typedi_1.Container.get("connectMySql"));
        // const conn = (await connection) as any;
        // // const conn = (await Container.get("agendaInstance")) as any;
        const { user_name, pass_word } = reqBody;
        if (user_name == undefined || pass_word == undefined) {
            console.log("Bạn đã nhập sai tài khoản hoặc mật khẩu vui lòng thử lại!");
        }
        else {
            const userTable = config_1.default.tbUser;
            const query = `SELECT * FROM ${userTable} WHERE user_name = '${user_name}' AND pass_word = '${pass_word}'`;
            const [rows, fields] = (await conn.execute(query));
            if (rows.length > 0) {
                const token = createToken_1.default.createToken(reqBody);
                return token;
            }
            else {
                console.log("Bạn đã đăng nhập sai");
            }
        }
    }
};
__decorate([
    (0, typedi_1.Inject)()
    // conn: Container.get("connectMySql") as any ;
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthSignIn.prototype, "login", null);
AuthSignIn = __decorate([
    (0, typedi_1.Service)()
], AuthSignIn);
exports.default = new AuthSignIn();
