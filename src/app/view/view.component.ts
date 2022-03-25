import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'view-component',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ViewComponent implements OnInit {
  peopleList: any = new Array();
  @Input() test: any;
  constructor(public ds: DataService, private http: HttpClient) {  }

  ngOnInit(): void {
    console.log('created');
    this.http.get("https://tekdi-challenges.appspot.com/api/People").subscribe(value => {console.log(value); this.peopleList = value;});
    console.log(this.peopleList)
  }
  OnClick(item)
  {
    this.ds.FormObj = item;
    this.ds.hidden = false;  
  }
}
