"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoBind = exports.classChange = void 0;
function classChange(value) {
    return function (target) {
        console.log("first");
        console.log(target);
        return class extends target {
            constructor(..._) {
                super();
                this.name = value.name;
                this.type = value.type;
                this.many = value.many;
                this.color = value.color;
            }
        };
    };
}
exports.classChange = classChange;
function AutoBind(_target, _methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
exports.AutoBind = AutoBind;
//# sourceMappingURL=decorator.js.map