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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const question_entity_1 = require("./entities/question.entity");
const new_question_repo_1 = require("./new_question.repo");
let QuestionService = class QuestionService {
    constructor(manager, repo) {
        this.manager = manager;
        this.repo = repo;
    }
    async create(user, QuestionForm) {
        console.log(user);
        await this.repo.AskQuestion(user, QuestionForm);
    }
    async ShowCharts() {
        return await this.repo.ShowCharts();
    }
    async PaginateQuestions(kid, pageNumber, pageSize, dateFrom, dateTo) {
        return await this.repo.PaginateQuestions(kid, pageNumber, pageSize, dateFrom, dateTo);
    }
    async findAll() {
        return this.manager.find(question_entity_1.Question, { relations: ['thread'] });
    }
    async findOne(id) {
        const question = await this.manager.findOne(question_entity_1.Question, id, {
            relations: ['thread', 'user'],
        });
        if (!question)
            throw new common_1.NotFoundException(`Question ${id} not found.`);
        return question;
    }
    async update(id, updateQuestionDto) {
        return this.manager.transaction(async (manager) => {
            const question = await this.manager.findOne(question_entity_1.Question, id);
            if (!question)
                throw new common_1.NotFoundException(`Question ${id} not found.`);
            manager.merge(question_entity_1.Question, question, updateQuestionDto);
            return manager.save(question);
        });
    }
    async remove(id) {
        return this.manager.transaction(async (manager) => {
            const question = await this.manager.findOne(question_entity_1.Question, id);
            if (!question)
                throw new common_1.NotFoundException(`Question ${id} not found.`);
            await manager.delete(question_entity_1.Question, id);
        });
    }
};
QuestionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectEntityManager()),
    __param(1, typeorm_1.InjectRepository(new_question_repo_1.NewQuestionRepo)),
    __metadata("design:paramtypes", [typeorm_2.EntityManager,
        new_question_repo_1.NewQuestionRepo])
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map