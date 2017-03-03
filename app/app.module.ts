import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {AppComponent} from'./components/app.component';
import {BookComponent} from './components/book/book.component';
import {MenuLibrarianComponent} from './components/menu/menu.component';
import {MenuModule} from 'primeng/primeng';

@NgModule({
    imports:[BrowserModule,MenuModule ],
    declarations:[AppComponent, BookComponent,MenuLibrarianComponent],
    bootstrap: [ AppComponent ]
})

export class AppModule{}