import {Component} from '@angular/core';
import {MenuItem} from "primeng/components/common/api";

@Component({
    selector: 'menu-librarian',
    templateUrl:'./app/components/menu/menu.component.html'
})

export class MenuLibrarianComponent{
    private items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'File',
            items: [
                {label: 'New', icon: 'fa-plus'},
                {label: 'Open', icon: 'fa-download'}
            ]
        },
            {
                label: 'Edit',
                items: [
                    {label: 'Undo', icon: 'fa-refresh'},
                    {label: 'Redo', icon: 'fa-repeat'}
                ]
            }];
    }
}