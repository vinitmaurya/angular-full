import { Component, Input, Output, ViewEncapsulation } from "@angular/core";
import * as EventEmitter from "events";

@Component({
    selector: "child",
    encapsulation: ViewEncapsulation.Emulated,
    template: `
    <h1>This is a template is of {{name}} 
    {{nameSecret ? "has a secrets": "does not have secrets"}}
    </h1>
    <button (click)="like(true)" [disabled]="voted">Like It</button>
    <button (click)="like(false)" [disabled]="voted">Dislike It</button>
    `
})
export class Child{
    @Input() name: string;
    @Input('secret') nameSecret: boolean;
    @Output() liked = new EventEmitter();
    voted:boolean;
    like(state:boolean){
        
        this.voted=!state;
    }
}