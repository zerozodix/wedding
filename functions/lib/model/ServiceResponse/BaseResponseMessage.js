"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseResponseMessage {
    get Status() {
        return this.status;
    }
    set Status(v) {
        this.status = v;
    }
    get Error() {
        return this.error;
    }
    set Error(v) {
        this.error = v;
    }
}
exports.BaseResponseMessage = BaseResponseMessage;
//# sourceMappingURL=BaseResponseMessage.js.map