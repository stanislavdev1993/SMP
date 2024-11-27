"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidator = void 0;
exports.productValidator = {
    validate: function (data) {
        var errors = [];
        if (!data.name)
            errors.push("Name is required");
        if (data.price <= 0)
            errors.push("Price must be greater than 0");
        return { isValid: errors.length === 0, errors: errors };
    },
};
