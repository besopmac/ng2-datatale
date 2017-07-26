import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html'
})
export class DatatableComponent {

    public data;
    public rows = [];
    public filterQuery = '';
    public rowsOnPage = 5;
    public sortBy = 'email';
    public sortOrder = 'asc';

    constructor(private http: Http) {
        this.fetch((data) => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `data.json`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

    req.send();
    }

    // public toInt(num: string) {
    //    return +num;
    // }

    // public sortByWordLength = (a: any) => {
    //     return a.city.length;
    // }

}
