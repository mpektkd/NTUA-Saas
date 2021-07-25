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
exports.Keyword = void 0;
const typeorm_1 = require("typeorm");
const thread_entity_1 = require("../../thread/entities/thread.entity");
let Keyword = class Keyword {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Keyword.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ 'unique': true }),
    __metadata("design:type", String)
], Keyword.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToMany(() => thread_entity_1.Thread, (thread) => thread.keywords),
    __metadata("design:type", Array)
], Keyword.prototype, "threads", void 0);
Keyword = __decorate([
    typeorm_1.Entity()
], Keyword);
exports.Keyword = Keyword;
//# sourceMappingURL=keyword.entity.js.map