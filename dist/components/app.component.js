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
        this.authorListb = [];
        this.msgs = [];
        this.checked = false;
        this.bookList = new Array();
        this.booksFound = new Array();
        this.book = new book_1.Book();
        this.newBook = new book_1.Book();
        this.authorList = new Array();
        this.author = new author_1.Author();
        this.newAuthor = new author_1.Author();
        this.authorListb = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.urlRef + "book")
            .toPromise()
            .then(function (response) { return _this.bookList = response.json(); })
            .then(function () { return _this.msgs.push({ severity: 'info', summary: 'Book list', detail: 'Loaded succesfully !' }); })
            .catch(function () { return _this.msgs.push({ severity: 'error', summary: 'Book list', detail: 'Can not load list.' }); });
        this.http.get(this.urlRef + "author")
            .toPromise()
            .then(function (reponse) { return _this.authorList = reponse.json(); })
            .then(function () { return loadAuthors(_this.authorList, _this.authorListb); })
            .then(function () { return _this.msgs.push({ severity: 'info', summary: 'Author list', detail: 'Loaded succesfully !' }); })
            .catch(function () { return _this.msgs.push({ severity: 'error', summary: 'Author list', detail: 'Can not load list.' }); });
        ;
        function loadAuthors(test, bis) {
            console.log("boucle");
            for (var _i = 0, test_1 = test; _i < test_1.length; _i++) {
                var elt = test_1[_i];
                bis.push({ label: elt.firstName, value: elt.uuid });
                console.log(elt);
            }
        }
    };
    AppComponent.prototype.addBook = function () {
        var _this = this;
        this.http.post(this.urlRef + "book", JSON.stringify(this.newBook), { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) })
            .toPromise()
            .then(function () { return _this.msgs.push({ severity: 'success', summary: 'Book added !', detail: _this.newBook.title.toString() }); })
            .catch(function () { return _this.msgs.push({ severity: 'error', summary: 'Error !', detail: 'Book can not be added.' }); });
    };
    AppComponent.prototype.getBooks = function (bookList) {
        this.http.get(this.urlRef + "book")
            .toPromise()
            .then(function (reponse) { return bookList = reponse.json(); });
    };
    AppComponent.prototype.getBook = function (booksFound) {
        this.http.get(this.urlRef + "book/" + this.referenceToFind)
            .toPromise().then(function (response) { return booksFound = response.json(); });
    };
    AppComponent.prototype.deleteBook = function () {
        var _this = this;
        this.http.delete(this.urlRef + "book/" + this.referenceToDelete)
            .toPromise()
            .then(function () { return _this.msgs.push({ severity: 'success', summary: 'Book deleted !', detail: '' }); })
            .catch(function () { return _this.msgs.push({ severity: 'error', summary: 'Error !', detail: 'Book can not be deleted.' }); });
    };
    AppComponent.prototype.getAuthors = function (authorList) {
        this.http.get(this.urlRef + "author")
            .toPromise()
            .then(function (reponse) { return authorList = reponse.json(); });
    };
    AppComponent.prototype.addAuthor = function () {
        var _this = this;
        this.newAuthor.alive = this.checked;
        this.http.post(this.urlRef + "author", JSON.stringify(this.newAuthor), { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) })
            .toPromise()
            .then(function () { return _this.msgs.push({ severity: 'success', summary: 'Author added !', detail: _this.newAuthor.firstName.toString() + ' ' + _this.newAuthor.lastName.toString() }); })
            .catch(function () { return _this.msgs.push({ severity: 'error', summary: 'Error !', detail: 'Author has not been added...' }); });
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