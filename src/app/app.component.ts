import { Component } from '@angular/core';
import { RacesComponent } from './races.component';
import { PoniesComponent } from './ponies/ponies.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [RacesComponent, PoniesComponent, CommonModule],
  template: `
            <ns-ponies />
            `,
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

