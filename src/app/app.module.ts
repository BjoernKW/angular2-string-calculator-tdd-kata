import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StringCalculatorService } from './stringCalculator/stringCalculator.service';
import { CalculatorComponent } from './stringCalculator/calculator.component'

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StringCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
