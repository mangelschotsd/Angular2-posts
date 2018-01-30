"use strict";
var Comment = (function () {
    function Comment(userId, id, name, title, body) {
        this.userId = userId;
        this.id = id;
        this.name = name;
        this.title = title;
        this.body = body;
    }
    Comment.prototype.toForm = function () {
        return "postId=" + this.userId + "&id=" + this.id + "&title=" + this.title + "&name=" + this.name + "&title=" + this.title + "&body=" + this.body;
    };
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map