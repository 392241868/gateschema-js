"use strict";
exports.__esModule = true;
exports["default"] = {
    name: 'required',
    add: function () {
        var first = this.constraints[0];
        if (first && (first === 'optional' || first.name === 'optional')) {
            this.constraints.splice(0, 1, 'required');
        }
        else {
            this.constraints.unshift('required');
        }
        this.lastConstraintIndex = 0;
        return this;
    },
    validator: function (value, ctx, cb) {
        value == null ? cb(true) : cb();
    }
};
