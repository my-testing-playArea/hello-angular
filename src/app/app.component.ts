import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  courses=[
    {id:1, name:'course1 '},
    {id:2, name:'course2 '},
    {id:3, name:'course3 '}
  ];
}
