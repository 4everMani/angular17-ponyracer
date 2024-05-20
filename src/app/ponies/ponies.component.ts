import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export class PonyModel {
  name!: string;
}

@Component({
  selector: 'ns-ponies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ponies.component.html',
  styleUrl: './ponies.component.css'
})
export class PoniesComponent {
  ponies: Array<PonyModel> = [{name: 'Rainbow Dash'}, {name: 'Pinkie Pie'}];


  RefreshPonies() {
    this.ponies = [{name: 'Fluttershy'}, {name: 'Rarity'}];
  }
}
