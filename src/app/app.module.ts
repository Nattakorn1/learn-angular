import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Counting } from './counting/counting.componet';
import { FormsModule } from '@angular/forms';
import { lab4 } from './counting/lab4.component';

@NgModule({
  declarations: [
    AppComponent,
    Counting,
    lab4
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
