import { Component } from '@angular/core';
import { StringCalculatorService } from "./stringCalculator/stringCalculator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StringCalculatorService],
})
export class AppComponent {
  title = 'app works!';

  constructor(private stringCalculator: StringCalculatorService) {
  }

  add(numbers: string) {
    return this.stringCalculator.add(numbers);
  }
}
