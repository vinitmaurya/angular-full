import { Component, Output, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'parent',
    encapsulation: ViewEncapsulation.Emulated,
    template:`
    <h2>welcome to parent how can i help</h2>
    <child [name]='myname' [secret]="mynameSecret"></child>
    `
})
export class Parent {
myname:string = "Naruto";
mynameSecret:boolean = false;
}