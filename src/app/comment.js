"use strict";
var Comment = (function () {
    function Comment(postId, cid, cname, ctitle, cbody) {
        this.postId = postId;
        this.cid = cid;
        this.cname = cname;
        this.ctitle = ctitle;
        this.cbody = cbody;
    }
    Comment.prototype.toForm = function () {
        return "postId=" + this.userId + "&cid=" + this.cid + "&cname=" + this.cname + "&ctitle=" + this.ctitle + "&cbody=" + this.cbody;
    };
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map