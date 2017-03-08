import { Component, OnInit } from'@angular/core';
import { Http, Headers } from '@angular/http';
import { Book } from '../domain/book';
import { Author } from '../domain/author';
import { Message } from 'primeng/primeng';

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

    public msgs:Message[]=[];

    public author: Author;
    public newAuthor: Author;
    public authorList: Array<Author>;

    public checked:Boolean = false;

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
              .then(response => this.bookList = response.json() as Array<Book>)
              .then(() => this.msgs.push({severity:'info', summary:'Book list',detail:'Loaded succesfully !'}))
              .catch(() => this.msgs.push({severity:'error', summary:'Book list',detail:'Can not load list.'}));
             
        this.http.get(this.urlRef+"author")
              .toPromise()
              .then(reponse => this.authorList = reponse.json() as Array<Author>)
              .then(()=> loadAuthors(this.authorList,this.authorListb) )
              .then(() => this.msgs.push({severity:'info', summary:'Author list',detail:'Loaded succesfully !'}))
              .catch(() => this.msgs.push({severity:'error', summary:'Author list',detail:'Can not load list.'}));;

       function loadAuthors(test:Array<Author>,bis){
            console.log("boucle");
            for(let elt of test){
                bis.push({ label: elt.firstName, value: elt.uuid});
                console.log(elt);
              }
            }
    }



    
    public addBook():void{

            this.http.post(this.urlRef+"book", 
                JSON.stringify(this.newBook), { headers: new Headers({'Content-Type':'application/json'})})
                .toPromise()
                .then(() => this.msgs.push({severity:'success', summary:'Book added !', detail:this.newBook.title.toString()}))
                .catch(() => this.msgs.push({severity:'error', summary:'Error !', detail:'Book can not be added.'})
                );
    }

    public getBooks(bookList:Array<Book>){
    
        this.http.get(this.urlRef+"book")
              .toPromise()
              .then(reponse => bookList = reponse.json() as Array<Book>);
    }

    public getBook(booksFound:Array<Book>){
        this.http.get(this.urlRef+"book/"+this.referenceToFind)
        .toPromise().then(response => booksFound = response.json() as Array<Book>);
    }

    
    public deleteBook():void{

            this.http.delete(this.urlRef+"book/"+this.referenceToDelete)
                .toPromise()
                .then(() => this.msgs.push({severity:'success', summary:'Book deleted !', detail:''}))
                .catch(() => this.msgs.push({severity:'error', summary:'Error !', detail:'Book can not be deleted.'})
                );
    }


    public getAuthors(authorList:Array<Author>){
    
        this.http.get(this.urlRef+"author")
              .toPromise()
              .then(reponse => authorList = reponse.json() as Array<Author>);
    }   


    public addAuthor():void{
        this.newAuthor.alive = this.checked;

        this.http.post(this.urlRef+"author", 
            JSON.stringify(this.newAuthor), { headers: new Headers({'Content-Type':'application/json'})})
            .toPromise()
            .then(() => this.msgs.push({severity:'success', summary:'Author added !', detail:this.newAuthor.firstName.toString() + ' '+this.newAuthor.lastName.toString()}))
            .catch(() => this.msgs.push({severity:'error', summary:'Error !', detail:'Author has not been added...'})
            );
    
        
}   

}