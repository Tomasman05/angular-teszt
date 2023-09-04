import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'teszt';
  valtozo:number = 5;
  tomb:any = ["Attila","Gergő", "Kriszti"]
  //tomb:any = []
}
