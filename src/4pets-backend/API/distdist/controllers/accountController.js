"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAccount = exports.registerAccount = exports.deleteAccount = exports.createAccount = exports.getAccount = exports.getAccounts = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const http_status_1 = __importStar(require("http-status"));
const db_1 = require("../db");
const getAccounts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Called getAccounts method");
    try {
        db_1.db.collection('Users').get().then((snapshot) => {
            snapshot.docs.map((doc => doc.data));
            res.status(http_status_1.default.OK).json(snapshot.docs);
        });
    }
    catch (err) {
        console.log("Could not get accounts");
        next(err);
    }
});
exports.getAccounts = getAccounts;
const getAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Called getAccount method");
    const { accountId } = req.params;
    try {
        const accRef = db_1.db.collection('Users').doc(accountId);
        let doc = yield accRef.get();
        if (!doc.exists) {
            firebase_admin_1.default.auth().getUserByEmail(accountId).then((user) => __awaiter(void 0, void 0, void 0, function* () {
                yield accRef.set({ email: accountId });
                doc = yield accRef.get();
            }))
                .catch((er) => {
                console.log("User does not exist");
                res.status(http_status_1.NOT_FOUND).send('User does not exist');
            });
        }
        else
            res.status(http_status_1.default.OK).json(doc.data());
    }
    catch (err) {
        console.log("Could not get account");
        next(err);
    }
});
exports.getAccount = getAccount;
const createAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Called createAccount method");
    try {
        const { name, password, zipcode, email, pet, phone } = req.body;
        const toAdd = {
            name,
            password,
            zipcode,
            email,
            pet,
            phone
        };
        const ret = yield db_1.db.collection('Users').doc(email).set(toAdd, { merge: true });
        console.log("Created");
        const accRef = db_1.db.collection('Users').doc(email);
        const doc = yield accRef.get();
        res.status(http_status_1.default.OK).json(doc.data());
    }
    catch (err) {
        console.log("Could not create new account");
        next(err);
    }
});
exports.createAccount = createAccount;
const deleteAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Called deleteAccount method");
    const { accountId } = req.params;
    try {
        const accRef = db_1.db.collection('Users').doc(accountId);
        const doc = yield accRef.get();
        if (!doc.exists) {
            console.log("Account does not exist!");
        }
        else {
            db_1.db.collection('Users').doc(accountId).delete();
            console.log("Deleted");
        }
        res.status(http_status_1.default.OK);
    }
    catch (err) {
        console.log("Could not delete account");
        next(err);
    }
});
exports.deleteAccount = deleteAccount;
const registerAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Called registerAccount method");
    // try {
    //     const {username, email, password} = req.body;
    //     const toRegister = {
    //         username,
    //         email,
    //         password
    //     }
    //     //const ret = await db.collection('Users').doc(email).set(to, {merge:true});
    //     firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
    //         console.log(result);
    //         console.log(result.user);
    //         //result.user.updateProfile( {displayName: name} )
    //     })
    //     console.log("Created");
    //     const accRef = db.collection('Users').doc(email);
    //     const doc = await accRef.get();
    //     res.status(httpStatus.OK).json(doc.data());
    // } catch(err) {
    //     console.log("Could not create new account");
    //     next(err);
    // }
});
exports.registerAccount = registerAccount;
const loginAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Called loginAccount method");
});
exports.loginAccount = loginAccount;
//# sourceMappingURL=accountController.js.map