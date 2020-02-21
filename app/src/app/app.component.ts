import { Component } from '@angular/core';
import { responce } from './mock-responce';
import { ResponseItem } from './models/response-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'app';
}
