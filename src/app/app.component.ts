import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  providers: [DataService]
})
export class AppComponent {
  constructor(public ds: DataService) {}
  title = 'info-app';
}
