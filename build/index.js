"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo = void 0;
const importedMethod_1 = __importDefault(require("./importedMethod"));
class Demo {
    constructor() {
        this.canImportedMethodChangeObjectProperty = false;
        this.importedMethod = importedMethod_1.default;
    }
}
exports.Demo = Demo;
const demo = new Demo();
demo.importedMethod();
console.log(demo.canImportedMethodChangeObjectProperty);
//# sourceMappingURL=index.js.map