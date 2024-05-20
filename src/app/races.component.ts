import { Component } from "@angular/core";

export class RaceModel {
    name!: string;
}

@Component({
    selector: 'ns-races',
    template: ` <h2>Races</h2>
                <button (click)="refreshRace()">Refresh the race list</button>
                <p>{{ races.length}}</p>`,
    standalone: true
})
export class RacesComponent {
    races: Array<RaceModel> = [];

    refreshRace() : void {
        this.races = [{name: 'Delhi'}, {name: 'Lucknow'}];
    }
}