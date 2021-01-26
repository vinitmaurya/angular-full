import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { Parent } from './parent';
import { Child } from './child';

@NgModule({
  declarations: [
    AppComponent,
    LifecyclehooksComponent,
    Parent,
    Child
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
