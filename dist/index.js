"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// insert user 
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email: username,
                password,
                firstName,
                lastName,
            },
            select: {
                id: true,
                email: true,
                password: true,
                firstName: true,
                lastName: true,
            },
        });
        console.log(res);
    });
}
// insertUser("admin4@gmail.com", "123456", "raja", "kumar")
// update user
function updateUser(username, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: {
                email: username,
            },
            data: {
                firstName,
                lastName,
            },
        });
        console.log(res);
    });
}
// updateUser("admin2@gmail.com", {
//   firstName: "raja111",
//   lastName: "kumar111",
// });
// find user
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: {
                email: username
            }
        });
        console.log(res);
    });
}
// getUser("admin2@gmail.com");
// delete user
function getdelete(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.delete({
            where: {
                email: username
            }
        });
        console.log(user);
    });
}
getdelete("admin4@gmail.com");
