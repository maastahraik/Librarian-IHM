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
    public book: Book;
    public newBook: Book;
    public bookList: Array<Book>;

    public author: Author;
    public newAuthor: Author;
    public authorList: Array<Author>;

    public constructor (private http: Http){ 
    this.bookList = new Array<Book>();
    this.book = new Book();
    this.newBook = new Book();
    this.authorList = new Array<Author>();
    this.author = new Author();
    this.newAuthor = new Author();
}

  ngOnInit(){
    this.http.get(this.urlRef+"book")
              .toPromise()
              .then(response => this.bookList = response.json() as Array<Book>);
              console.log(this.bookList);

    this.http.get(this.urlRef+"author")
              .toPromise()
              .then(reponse => this.authorList = reponse.json() as Array<Author>);
              console.log(this.authorList);
  }

  public getBooks(bookList:Array<Book>){
    
        this.http.get(this.urlRef+"book")
              .toPromise()
              .then(reponse => bookList = reponse.json() as Array<Book>);
              console.log("méthode getBooks");
}

  public getAuthors(authorList:Array<Author>){
    
        this.http.get(this.urlRef+"author")
              .toPromise()
              .then(reponse => authorList = reponse.json() as Array<Author>);
              console.log("méthode getAuthors");
}

public addBook():void{

        this.http.post(this.urlRef+"book", 
            JSON.stringify(this.newBook), { headers: new Headers({'Content-Type':'application/json'})})
            .toPromise()
            .then(() => console.log("Added !"+this.newBook));
}



public addAuthor():void{

        this.http.post(this.urlRef+"author", 
            JSON.stringify(this.newAuthor), { headers: new Headers({'Content-Type':'application/json'})})
            .toPromise()
            .then(() => console.log("Added !"+this.newAuthor.firstName+" "+this.newAuthor.lastName));
}

}