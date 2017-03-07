import { Component, OnInit } from'@angular/core';
import { Http, Headers } from '@angular/http';
import { Book } from '../domain/book';
import { Author } from '../domain/author';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
    selector:'my-app',
    templateUrl:'./app/components/app.component.html'
})

export class AppComponent  implements OnInit{

    private urlRef:String = "http://localhost:8080/Librarian-1.0/ws/";
    public selectedAuthor: String;
    public referenceToFind: String;
    public referenceToDelete: String;
    public authorListb = [];
    public book: Book;
    public newBook: Book;
    public bookList: Array<Book>;
    public booksFound: Array<Book>;

    public author: Author;
    public newAuthor: Author;
    public authorList: Array<Author>;

    public checked:Boolean;

    public constructor (private http: Http){ 
    this.bookList = new Array<Book>();
    this.booksFound = new Array<Book>();
    this.book = new Book();
    this.newBook = new Book();
    this.authorList = new Array<Author>();
    this.author = new Author();
    this.newAuthor = new Author();
    this.authorListb= [];
              
    }

    ngOnInit(){
        this.http.get(this.urlRef+"book")
              .toPromise()
              .then(response => this.bookList = response.json() as Array<Book>);
             
        this.http.get(this.urlRef+"author")
              .toPromise()
              .then(reponse => this.authorList = reponse.json() as Array<Author>)
              .then(()=> loadAuthors(this.authorList,this.authorListb) );

       function loadAuthors(test:Array<Author>,bis){
            console.log("boucle");
            for(let elt of test){
                bis.push({ label: elt.firstname, value: elt.uuid});
                console.log(elt);
              }
            }
    }



    public getBooks(bookList:Array<Book>){
    
        this.http.get(this.urlRef+"book")
              .toPromise()
              .then(reponse => bookList = reponse.json() as Array<Book>);
              console.log("méthode getBooks");
    }

    public getBook(booksFound:Array<Book>){
        this.http.get(this.urlRef+"book/"+this.referenceToFind)
        .toPromise().then(response => booksFound = response.json() as Array<Book>);
    }

    public addBook():void{

            this.http.post(this.urlRef+"book", 
                JSON.stringify(this.newBook), { headers: new Headers({'Content-Type':'application/json'})})
                .toPromise()
                .then(() => console.log("Added !"+this.newBook));
    }

    
    public deleteBook():void{

            this.http.delete(this.urlRef+"book/"+this.referenceToDelete)
                .toPromise()
                .then(() => console.log("Deleted !"+this.newBook));
    }


    public getAuthors(authorList:Array<Author>){
    
        this.http.get(this.urlRef+"author")
              .toPromise()
              .then(reponse => authorList = reponse.json() as Array<Author>);
              console.log("méthode getAuthors");
    }   


    public addAuthor():void{
        this.newAuthor.alive = this.checked;

        this.http.post(this.urlRef+"author", 
            JSON.stringify(this.newAuthor), { headers: new Headers({'Content-Type':'application/json'})})
            .toPromise()
            .then(() => console.log("Added !"+JSON.stringify(this.newAuthor)));
    }   

}