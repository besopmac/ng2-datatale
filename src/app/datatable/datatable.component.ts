import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  public data;
  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'email';
  public sortOrder = 'asc';

  constructor(private http: Http) {
  }

  ngOnInit(): void {
      this.http.get('./app/datatable/data.json')
          .subscribe((data) => {
              setTimeout(() => {
                  this.data = data.json();
              }, 1000);
          });
  }

  public toInt(num: string) {
      return +num;
  }

  public sortByWordLength = (a: any) => {
      return a.city.length;
  }

}
