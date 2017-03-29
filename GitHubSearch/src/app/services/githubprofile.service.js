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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var GitHubProfileService = (function () {
    function GitHubProfileService(_http) {
        this._http = _http;
        this.username = "mkalakota";
        this.clientId = "3ff5e855b4c74264f5e8";
        this.clientSecret = "4eef1e00fbd91998f535359e8ba0d46116e6e1a7";
        console.log("service ready....");
    }
    GitHubProfileService.prototype.getUsers = function () {
        return this._http.get("http://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
            .map(function (res) { return res.json(); });
    };
    GitHubProfileService.prototype.getRepos = function () {
        return this._http.get("http://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
            .map(function (res) { return res.json(); });
    };
    GitHubProfileService.prototype.updateUser = function (username) {
        this.username = username;
    };
    GitHubProfileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GitHubProfileService);
    return GitHubProfileService;
}());
exports.GitHubProfileService = GitHubProfileService;
//# sourceMappingURL=githubprofile.service.js.map