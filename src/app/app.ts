import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'myangular-app';
 demo = 'abc';


students = ['Ramesh', 'Suresh'];


constructor() {

this.demo = 'new Value'

}


greetme()
{
var title = 'Arvind'
console.log(title);
}

}
