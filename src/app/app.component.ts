import { Component } from '@angular/core';
import { RacesComponent } from './races.component';

@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [RacesComponent],
  template: `<h1 (click)="method2()">PonyRacer</h1>
            <div (click)="method2()">
              <div (click)="method1()">
                <button>ClickMe</button>
              </div>
            </div>
            <ns-races></ns-races>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ponyracer';
  numbersOfUser = 489;
  user = {name: 'Manish Jaiswal'}
  manish = "jaiswal";

  submit() {
    this.user.name = Math.random().toString();
  }
  method1() {
    console.log('method1');
  }
  method2() {
    console.log('method2');
  }
}

