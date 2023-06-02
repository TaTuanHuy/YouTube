"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
function test1({ mySqlConnection }) {
    return new (class Agenda {
        contructor() { }
        mySql = mySqlConnection;
    })();
}
exports.default = test1;
