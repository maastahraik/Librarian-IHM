import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from'./components/app.component';
import { BookComponent } from './components/book/book.component';
import { MenuLibrarianComponent } from './components/menu/menu.component';
import { MenuModule, DropdownModule, SpinnerModule, 
        InputTextModule, InputMaskModule, ButtonModule,
        DataTableModule } from 'primeng/primeng';
import { RouterModule } from'@angular/router';
import { BookAddComponent } from './components/book/bookAdd.component';

@NgModule({
    imports:[BrowserModule, MenuModule, DropdownModule,
            SpinnerModule, InputTextModule, InputMaskModule,
            ButtonModule, HttpModule, FormsModule,
            DataTableModule, RouterModule.forRoot([
            {
                path:'book',
                component:BookComponent
            }
]) ],
    declarations:[ AppComponent, BookComponent,MenuLibrarianComponent,BookAddComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule{}
