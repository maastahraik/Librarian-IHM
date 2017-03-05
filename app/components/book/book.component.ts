import { Component } from '@angular/core';
import {AppComponent}from '../app.component';
import { Book } from '../../domain/book';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
    selector : 'book-view',
    templateUrl:'./app/components/book/book.component.html'
})

export class BookComponent{

    public bookList: Array<Book>;

}