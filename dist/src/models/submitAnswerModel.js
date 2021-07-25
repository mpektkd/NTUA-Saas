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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitAnswerModel = void 0;
const class_validator_1 = require("class-validator");
class SubmitAnswerModel {
    constructor(body, qid, userId) {
        this.body = body;
        this.qid = qid;
        this.userId = userId;
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SubmitAnswerModel.prototype, "body", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], SubmitAnswerModel.prototype, "qid", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], SubmitAnswerModel.prototype, "userId", void 0);
exports.SubmitAnswerModel = SubmitAnswerModel;
//# sourceMappingURL=submitAnswerModel.js.map