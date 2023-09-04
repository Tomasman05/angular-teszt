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
  obj:any = [
    {name:"Attila", age:48},
    {name:"Józsi", age:52},
    {name:"Sallai", age:53},
    {name:"Dezsőőő", age:9999999}
  ]
}
