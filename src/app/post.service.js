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
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.postsURI = 'http://jsonplaceholder.typicode.com/posts';
    }
    // get all posts
    PostService.prototype.getAllPosts = function () {
        var url = "" + this.postsURI;
        return this.http.get(url);
    };
    // get comments based on the index
    PostService.prototype.getCommentsForPost = function (index) {
        var url = 'http://jsonplaceholder.typicode.com/post/' + index + '/comments';
        return this.http.get(url);
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map