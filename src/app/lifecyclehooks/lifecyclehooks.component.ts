import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit {

  constructor(){ }
  ngOnChanges(){
    console.log("printing from ngOnChanges");
  }
  ngOnInit(){
    console.log("printing from ngOnInit");
  }
  ngDoCheck(){
    console.log("printing from ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("printing from ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("printing from ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("printing from ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("printing from ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("printing from ngOnDestroy");
  }
  
}
