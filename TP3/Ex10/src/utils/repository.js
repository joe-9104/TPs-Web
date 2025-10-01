"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
var Repository = /** @class */ (function () {
    function Repository(initialItems) {
        if (initialItems === void 0) { initialItems = []; }
        this.items = [];
        this.items = __spreadArray([], initialItems, true);
    }
    Repository.prototype.getAll = function () {
        return __spreadArray([], this.items, true);
    };
    Repository.prototype.getById = function (id) {
        return this.items.find(function (item) { return item.id === id; });
    };
    Repository.prototype.add = function (item) {
        if (this.getById(item.id)) {
            throw new Error("Item with id ".concat(item.id, " already exists."));
        }
        this.items.push(item);
    };
    Repository.prototype.update = function (item) {
        var index = this.items.findIndex(function (i) { return i.id === item.id; });
        if (index === -1) {
            throw new Error("Item with id ".concat(item.id, " not found."));
        }
        this.items[index] = item;
    };
    Repository.prototype.delete = function (id) {
        var index = this.items.findIndex(function (i) { return i.id === id; });
        if (index === -1) {
            throw new Error("Item with id ".concat(id, " not found."));
        }
        this.items.splice(index, 1);
        return true;
    };
    Repository.prototype.find = function (predicate) {
        return this.items.filter(predicate);
    };
    return Repository;
}());
exports.Repository = Repository;
