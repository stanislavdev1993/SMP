"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCompositeValidator = void 0;
function createCompositeValidator() {
    var validators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments[_i];
    }
    return {
        validators: validators,
        validate: function (data) {
            var errors = [];
            var isValid = true;
            for (var _i = 0, _a = this.validators; _i < _a.length; _i++) {
                var validator = _a[_i];
                var result = validator.validate(data);
                if (!result.isValid) {
                    isValid = false;
                    errors.push.apply(errors, (result.errors || []));
                }
            }
            return { isValid: isValid, errors: errors };
        }
    };
}
exports.createCompositeValidator = createCompositeValidator;
