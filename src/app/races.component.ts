import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

export class RaceModel {
    name!: string;
}

@Component({
    selector: 'ns-races',
    templateUrl: './races.component.html',
    styleUrl: './races.component.scss',
    standalone: true,
    imports: [CommonModule]
})
export class RacesComponent {
    races: Array<RaceModel> = [{name: 'Delhi'}, {name: 'Lucknow'}];

    refreshRace() : void {
        this.races = [{name: 'Delhi'}, {name: 'Lucknow'}];
    }
}