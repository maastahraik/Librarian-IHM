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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var book_1 = require("../domain/book");
var author_1 = require("../domain/author");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.urlRef = "http://localhost:8080/Librarian-1.0/ws/";
        this.bookList = new Array();
        this.booksFound = new Array();
        this.book = new book_1.Book();
        this.newBook = new book_1.Book();
        this.authorList = new Array();
        this.author = new author_1.Author();
        this.newAuthor = new author_1.Author();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.urlRef + "book")
            .toPromise()
            .then(function (response) { return _this.bookList = response.json(); });
        console.log(this.bookList);
        this.http.get(this.urlRef + "author")
            .toPromise()
            .then(function (reponse) { return _this.authorList = reponse.json(); });
        console.log(this.authorList);
    };
    AppComponent.prototype.getBooks = function (bookList) {
        this.http.get(this.urlRef + "book")
            .toPromise()
            .then(function (reponse) { return bookList = reponse.json(); });
        console.log("méthode getBooks");
    };
    AppComponent.prototype.getBook = function (booksFound) {
        this.http.get(this.urlRef + "book/" + this.referenceToFind)
            .toPromise().then(function (response) { return booksFound = response.json(); });
    };
    AppComponent.prototype.addBook = function () {
        var _this = this;
        this.http.post(this.urlRef + "book", JSON.stringify(this.newBook), { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) })
            .toPromise()
            .then(function () { return console.log("Added !" + _this.newBook); });
    };
    AppComponent.prototype.getAuthors = function (authorList) {
        this.http.get(this.urlRef + "author")
            .toPromise()
            .then(function (reponse) { return authorList = reponse.json(); });
        console.log("méthode getAuthors");
    };
    AppComponent.prototype.addAuthor = function () {
        var _this = this;
        this.newAuthor.alive = this.checked;
        this.http.post(this.urlRef + "author", JSON.stringify(this.newAuthor), { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) })
            .toPromise()
            .then(function () { return console.log("Added !" + JSON.stringify(_this.newAuthor)); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/components/app.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map