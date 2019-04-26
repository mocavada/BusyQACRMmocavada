import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { PapaParseModule } from '../index';
//import { Component, OnInit } from '@angular/core';

// @Component({
//     selector: '',
//     templateUrl: '',
//     styleUrls: ['']
//   })

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        PapaParseModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule  { 
    
  }
//   export class ExampleModule implements OnInit { 
//     i;
//   }
 
//   constructor() { }

//   ngOnInit() { }
   